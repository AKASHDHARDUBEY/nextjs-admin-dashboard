"use client";

import { useState } from "react";
import { loginUser } from "../action/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

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

                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        background: "red",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                >
                    Login
                </button>
            </form>

            <p style={{ marginTop: "15px" }}>
                Don't have an account?{" "}
                <Link href="/register">
                    Register
                </Link>
            </p>
        </div>
    );
}