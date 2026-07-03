"use client";

import { useState } from "react";
import { loginUser } from "../action/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const result = await loginUser(email, password);

        alert(result.message);

        if (result.success) {
            router.push("/dashboard");
        }
    }

    return (
        <div
            style={{
                maxWidth: "400px",
                margin: "50px auto",
            }}
        >
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />
                <br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <br />

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}