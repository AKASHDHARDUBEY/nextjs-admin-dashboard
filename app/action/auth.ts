"use server";

import { db } from "@/lib/db";
import { hashPassword, comparePassword, createToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function registerUser(
    name: string,
    email: string,
    password: string
) {
    const existingUser = await db.user.findUnique({
        where: {
            email,
        },
    });

    if (existingUser) {
        return {
            success: false,
            message: "Email already exists",
        };
    }

    const hashedPassword = await hashPassword(password);

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    return {
        success: true,
        message: "Registration successful",
    };
}

// logon

export async function loginUser(
    email: string,
    password: string
) {
    const user = await db.user.findUnique({
        where: {
            email,
        },
    });

    if (!user) {
        return {
            success: false,
            message: "User not found",
        };
    }

    const isPasswordCorrect = await comparePassword(
        password,
        user.password
    );

    if (!isPasswordCorrect) {
        return {
            success: false,
            message: "Wrong password",
        };
    }

    const token = await createToken({
        id: user.id,
        email: user.email,
    });

    const cookieStore = await cookies();

    cookieStore.set("token", token, {
        httpOnly: true,
        secure: false,
        path: "/",
    });

    return {
        success: true,
        message: "Login successful",
    };
}

export async function logoutUser() {
    const cookieStore = await cookies();

    cookieStore.delete("token");

    return {
        success: true,
    };
}