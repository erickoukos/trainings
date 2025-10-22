import { cookies } from "next/headers";

export interface SessionUser {
  id: string;
  email: string;
  name?: string;
  role: string;
  type?: string;
}

export interface Session {
  user: SessionUser;
  expires: Date;
}

export async function getSession(): Promise<Session | null> {
  try {
    const cookieStore = cookies();
    const sessionCookie = cookieStore.get("session");

    if (!sessionCookie) {
      return null;
    }

    const sessionData = JSON.parse(sessionCookie.value);
    
    // Check if session is expired
    if (new Date(sessionData.expires) < new Date()) {
      return null;
    }

    return sessionData;
  } catch (error) {
    console.error("Session error:", error);
    return null;
  }
}