import { NextRequest, NextResponse } from "next/server";
import { verifyCredentials } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await verifyCredentials(email, password);

    if (!user) {
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Create session data
    const sessionData = {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        type: user.type
      },
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
    };

    // Set session cookie
    const cookieStore = cookies();
    cookieStore.set("session", JSON.stringify(sessionData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 // 7 days
    });

    // Determine redirect URL based on role
    let redirect = "/";
    if (user.role === "ADMIN") {
      redirect = "/admin/dashboard";
    } else if (user.role === "TRAINER") {
      redirect = "/trainer/dashboard";
    } else {
      redirect = "/trainings";
    }

    return NextResponse.json({
      success: true,
      user: sessionData.user,
      redirect
    });

  } catch (error) {
    console.error("Sign-in error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}