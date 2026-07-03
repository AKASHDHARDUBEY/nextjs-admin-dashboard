"use client";

import { useRouter } from "next/navigation";
import { logoutUser } from "../action/auth";

export default function LogoutButton() {
    const router = useRouter();

    async function handleLogout() {
        await logoutUser();

        router.push("/login");
    }

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}