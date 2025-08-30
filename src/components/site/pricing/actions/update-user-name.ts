"use server";

// import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function updateUserName(userId: string, name: string) {
  try {
    // const session = await auth()
    // const user = session?.user;

    // Mock user for template - replace with actual auth
    const user = {
      id: "mock-user-id",
      email: "user@example.com"
    };

    if (!user) {
      throw new Error("Unauthorized");
    }

    // Mock database update for template - replace with actual Prisma call
    // await prisma.user.update({
    //   where: { id: userId },
    //   data: { name },
    // });

    revalidatePath("/starter/dashboard/settings");
    return { success: true };
  } catch (error) {
    // console.error("Failed to update user name:", error);
    return { success: false, error: "Failed to update user name" };
  }
}