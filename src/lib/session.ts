import { cookies } from 'next/headers'

export async function getSession() {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('session')
  
  if (!sessionCookie) {
    return null
  }

  try {
    const user = JSON.parse(Buffer.from(sessionCookie.value, 'base64').toString())
    return { user }
  } catch {
    return null
  }
}