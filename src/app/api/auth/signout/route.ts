import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    const cookieStore = cookies();
    cookieStore.delete("session");

    return NextResponse.json({
      success: true,
      message: "Signed out successfully"
    });

  } catch (error) {
    console.error("Sign-out error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}