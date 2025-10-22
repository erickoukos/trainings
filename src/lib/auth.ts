import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Check for admin user
        const adminUser = await prisma.user.findUnique({
          where: { email: credentials.email }
        })

        if (adminUser && await bcrypt.compare(credentials.password, adminUser.password)) {
          return {
            id: adminUser.id,
            email: adminUser.email,
            name: adminUser.name,
            role: adminUser.role,
            type: 'user'
          }
        }

        // Check for trainer
        const trainer = await prisma.trainer.findUnique({
          where: { email: credentials.email }
        })

        if (trainer && await bcrypt.compare(credentials.password, trainer.password)) {
          return {
            id: trainer.id,
            email: trainer.email,
            name: trainer.name,
            role: "TRAINER",
            type: 'trainer'
          }
        }

        return null
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.type = user.type
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role as string
        session.user.type = token.type as string
      }
      return session
    }
  },
  pages: {
    signIn: "/auth/signin"
  }
}

export async function verifyCredentials(email: string, password: string) {
  // Check for admin user
  const adminUser = await prisma.user.findUnique({
    where: { email }
  })

  if (adminUser && await bcrypt.compare(password, adminUser.password)) {
    return {
      id: adminUser.id,
      email: adminUser.email,
      name: adminUser.name,
      role: adminUser.role,
      type: 'user'
    }
  }

  // Check for trainer
  const trainer = await prisma.trainer.findUnique({
    where: { email }
  })

  if (trainer && await bcrypt.compare(password, trainer.password)) {
    return {
      id: trainer.id,
      email: trainer.email,
      name: trainer.name,
      role: "TRAINER",
      type: 'trainer'
    }
  }

  return null
}