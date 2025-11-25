import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { email, password } = await req.json();

    // Temporary credentials (replace with your own for now)
    const TEMP_EMAIL = "test@example.com";
    const TEMP_PASSWORD = "password123";

    if (email === TEMP_EMAIL && password === TEMP_PASSWORD) {
        // Simulate a session using cookies (temporary)
        const response = NextResponse.json({ success: true, message: "Login successful" });
        response.cookies.set("auth_token", "temporary_token", {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60, // 1 hour
        });
        return response;
    }

    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
}
