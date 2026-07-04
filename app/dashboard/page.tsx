import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Navbar from "./components/Navbar";

import StatCard from "./components/StatsCard";
import SeverityChart from "./components/SeverityChart";
import RecentActivity from "./components/RecentActivity";
import ScanTable from "./components/ScanTable";
import Sidebar from "./components/Sidebar";

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
    const vulnerabilities = await db.vulnerability.findMany();
    const recentVulnerabilities = await db.vulnerability.findMany({
        orderBy: {
            createdAt: "desc",
        },
        take: 5,
    });
    const critical = vulnerabilities.filter(
        (v) => v.severity === "Critical"
    ).length;

    const high = vulnerabilities.filter(
        (v) => v.severity === "High"
    ).length;

    const medium = vulnerabilities.filter(
        (v) => v.severity === "Medium"
    ).length;

    const low = vulnerabilities.filter(
        (v) => v.severity === "Low"
    ).length;

    const total = vulnerabilities.length;

    return (
        <div
            style={{
                display: "flex",
                background: "whitesmoke",
                minHeight: "100vh",
            }}
        >
            <Sidebar />

            <div
                style={{
                    flex: 1,
                }}
            >
                <Navbar />

                <div
                    style={{
                        padding: "30px",
                        background: "lightgray",
                        minHeight: "100vh",
                    }}
                >
                    <h1>Hello {user.name} </h1>

                    <p>Welcome to your dashboard.</p>

                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            flexWrap: "wrap",
                            marginTop: "30px",
                        }}
                    >
                        <StatCard
                            title="Total Scans"
                            value={total}
                            color="blue"
                        />

                        <StatCard
                            title="Critical"
                            value={critical}
                            color="red"
                        />

                        <StatCard
                            title="High"
                            value={high}
                            color="orange"
                        />

                        <StatCard
                            title="Low"
                            value={low}
                            color="green"
                        />
                    </div>

                    <SeverityChart
                        critical={critical}
                        high={high}
                        medium={medium}
                        low={low}
                    />

                    <RecentActivity
                        vulnerabilities={recentVulnerabilities}
                    />
                    <ScanTable />
                </div>
            </div>
        </div>
    );
}
