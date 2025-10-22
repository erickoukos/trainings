import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const { 
      name, 
      email, 
      password, 
      phone, 
      address, 
      city, 
      country, 
      occupation, 
      experience, 
      education, 
      trainingInterests, 
      preferredFormat, 
      agreeToTerms, 
      agreeToMarketing 
    } = await request.json();

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    if (!agreeToTerms) {
      return NextResponse.json(
        { success: false, error: "You must agree to the terms and conditions" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, error: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user with enhanced profile data
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "USER",
        // Store additional profile information in a JSON field or separate table
        // For now, we'll store it as metadata
        phone: phone || null,
        address: address || null,
        city: city || null,
        country: country || null,
        occupation: occupation || null,
        experience: experience || null,
        education: education || null,
        trainingInterests: trainingInterests ? JSON.stringify(trainingInterests) : null,
        preferredFormat: preferredFormat || null,
        agreeToMarketing: agreeToMarketing || false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });

    return NextResponse.json({
      success: true,
      message: "Account created successfully. Welcome to Lish AI Labs!",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error("Sign-up error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
