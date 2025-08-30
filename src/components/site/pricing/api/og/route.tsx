import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

// import { auth } from "@/auth";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    // const session = await auth();
    // const user = session?.user;

    // Mock user for template - replace with actual auth
    const user = {
      id: "mock-user-id",
      email: "user@example.com",
      name: "Mock User"
    };

    if (!user) {
      return new ImageResponse(
        (
          <div
            style={{
              fontSize: 128,
              background: "white",
              width: "100%",
              height: "100%",
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Login to continue
          </div>
        ),
        {
          width: 1200,
          height: 600,
        }
      );
    }

    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    if (!type) {
      return new ImageResponse(
        (
          <div
            style={{
              fontSize: 128,
              background: "white",
              width: "100%",
              height: "100%",
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Type parameter is required
          </div>
        ),
        {
          width: 1200,
          height: 600,
        }
      );
    }

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {type} - {user.name}
        </div>
      ),
      {
        width: 1200,
        height: 600,
      }
    );
  } catch (error) {
    // console.error("Failed to generate OG image:", error);
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Error generating image
        </div>
      ),
      {
        width: 1200,
        height: 600,
      }
    );
  }
}
