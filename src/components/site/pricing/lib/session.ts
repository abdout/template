// import { db } from "@/components/site/pricing/lib/db";
import { getUserSubscriptionPlan } from "@/components/site/pricing/lib/subscription";

// import { auth } from "@/auth";

export async function getSession() {
  try {
    // const session = await auth();
    // const user = session?.user;

    // Mock user for template - replace with actual auth
    const user = {
      id: "mock-user-id",
      email: "user@example.com"
    };

    if (!user) {
      return null;
    }

    const subscriptionPlan = await getUserSubscriptionPlan(user.id);

    return {
      user,
      subscriptionPlan,
    };
  } catch (error) {
    // console.error("Failed to get session:", error);
    return null;
  }
}