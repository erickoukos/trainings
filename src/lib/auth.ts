// Simple authentication utilities
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

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