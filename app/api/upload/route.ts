import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST() {
    await db.vulnerability.createMany({
        data: [
            {
                title: "SQL Injection",
                severity: "Critical",
                description: "SQL Injection found",
                ipAddress: "192.168.1.10",
                status: "Open",
            },
            {
                title: "Cross Site Scripting",
                severity: "High",
                description: "XSS vulnerability",
                ipAddress: "192.168.1.20",
                status: "Open",
            },
            {
                title: "Weak Password",
                severity: "Medium",
                description: "Weak password policy",
                ipAddress: "192.168.1.30",
                status: "Open",
            },
            {
                title: "Open Port",
                severity: "Low",
                description: "Unused port exposed",
                ipAddress: "192.168.1.40",
                status: "Open",
            },
        ],
    });

    return NextResponse.json({
        success: true,
    });
}