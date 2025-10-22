import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";

export async function GET() {
  try {
    const session = await getSession();
    
    if (!session) {
      return NextResponse.json({ user: null }, { status: 401 });
    }
    
    return NextResponse.json(session);
  } catch (error) {
    console.error("Session error:", error);
    return NextResponse.json({ user: null }, { status: 401 });
  }
}