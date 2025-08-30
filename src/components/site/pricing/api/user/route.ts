import { NextRequest, NextResponse } from "next/server";

// import { auth } from "@/auth";
// import { prisma } from "@/components/site/pricing/lib/db";

export async function GET(request: NextRequest) {
  try {
    // const session = await auth();
    // const user = session?.user;

    // Mock user for template - replace with actual auth
    const user = {
      id: "mock-user-id",
      email: "user@example.com"
    };

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Mock database query for template - replace with actual Prisma call
    // const dbUser = await prisma.user.findUnique({
    //   where: { id: user.id },
    //   select: {
    //     id: true,
    //     name: true,
    //     email: true,
    //     role: true,
    //     stripeCustomerId: true,
    //     stripeSubscriptionId: true,
    //     stripePriceId: true,
    //     stripeCurrentPeriodEnd: true,
    //   },
    // });

    // Mock user data for template
    const dbUser = {
      id: user.id,
      name: "Mock User",
      email: user.email,
      role: "USER",
      stripeCustomerId: null,
      stripeSubscriptionId: null,
      stripePriceId: null,
      stripeCurrentPeriodEnd: null,
    };

    return NextResponse.json(dbUser);
  } catch (error) {
    // console.error("Failed to get user:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

