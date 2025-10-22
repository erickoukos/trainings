"use client"

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

export async function getClientSession(): Promise<Session | null> {
  try {
    const response = await fetch('/api/auth/me', {
      credentials: 'include'
    });
    
    if (!response.ok) {
      return null;
    }
    
    const session = await response.json();
    return session;
  } catch (error) {
    console.error("Session error:", error);
    return null;
  }
}
