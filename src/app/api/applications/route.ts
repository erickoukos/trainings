import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { 
      trainingId, 
      name, 
      email, 
      phone, 
      message, 
      paymentMethod, 
      transactionCode 
    } = await request.json();

    // Validate required fields
    if (!trainingId || !name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Training ID, name, email, and phone are required" },
        { status: 400 }
      );
    }

    // Check if training exists
    const training = await prisma.training.findUnique({
      where: { id: trainingId }
    });

    if (!training) {
      return NextResponse.json(
        { success: false, error: "Training not found" },
        { status: 404 }
      );
    }

    // Check if user already applied for this training
    const existingApplication = await prisma.application.findFirst({
      where: {
        trainingId,
        email
      }
    });

    if (existingApplication) {
      return NextResponse.json(
        { success: false, error: "You have already applied for this training" },
        { status: 409 }
      );
    }

    // Create application
    const application = await prisma.application.create({
      data: {
        trainingId,
        name,
        email,
        phone,
        message: message || null,
        status: "PENDING",
        // Store payment info in message field for now
        feedback: paymentMethod && transactionCode ? 
          `Payment Method: ${paymentMethod}, Transaction Code: ${transactionCode}` : 
          null
      }
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully. We'll review it and get back to you soon.",
      applicationId: application.id
    });

  } catch (error) {
    console.error("Application error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const trainingId = searchParams.get('trainingId');

    let whereClause: any = {};
    
    if (status) {
      whereClause.status = status;
    }
    
    if (trainingId) {
      whereClause.trainingId = trainingId;
    }

    const applications = await prisma.application.findMany({
      where: whereClause,
      include: {
        training: {
          select: {
            title: true,
            beginDate: true,
            endDate: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json({
      success: true,
      applications
    });

  } catch (error) {
    console.error("Get applications error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
