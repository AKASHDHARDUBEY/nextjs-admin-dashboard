"use client";

import { useState } from "react";
import { registerUser } from "../action/auth";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const result = await registerUser(
            name,
            email,
            password
        );
        alert(result.message);

        if (result.success) {
            setName("");
            setEmail("");
            setPassword("");
        }
    }
    return (
        <div style={{
            maxWidth: "400px",
            margin: "50px auto",
        }}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <br />
                <br />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <br />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <br />
                <br />
                <button type="submit">
                    Register
                </button>


            </form>
        </div>
    );

}
