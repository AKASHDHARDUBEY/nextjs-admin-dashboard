import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton";

import { verifyToken } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function DashboardPage() {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
        redirect("/login");
    }

    const payload = await verifyToken(token);

    if (!payload) {
        redirect("/login");
    }

    const user = await db.user.findUnique({
        where: {
            id: payload.id as string,
        },
    });

    if (!user) {
        redirect("/login");
    }

    return (
        <div
            style={{
                padding: "40px",
            }}
        >
            <h1>Hello {user.name}</h1>

            <p>Welcome to your dashboard.</p>
            <br />
            <LogoutButton />
        </div>
    );
}