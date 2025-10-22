import { NextRequest, NextResponse } from 'next/server'
import { verifyCredentials } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    const user = await verifyCredentials(email, password)

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Create a simple session token (in production, use JWT)
    const sessionToken = Buffer.from(JSON.stringify(user)).toString('base64')

    const response = NextResponse.json({ 
      success: true, 
      user,
      redirect: user.role === 'ADMIN' ? '/admin/dashboard' : 
                user.role === 'TRAINER' ? '/trainer/dashboard' : '/'
    })

    // Set session cookie
    response.cookies.set('session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })

    return response
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
