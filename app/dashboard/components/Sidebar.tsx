import Link from "next/link";

export default function Sidebar() {
    return (
        <div
            style={{
                width: 220,
                background: "black",
                color: "white",
                padding: 20,
                minHeight: "100vh",
            }}
        >
            <h2 style={{ marginBottom: 20 }}>Vynox Security</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                <Link
                    href="/dashboard"
                    style={{ color: "white", textDecoration: "none" }}
                >
                    Dashboard
                </Link>

                <Link
                    href="/upload"
                    style={{ color: "white", textDecoration: "none" }}
                >
                    Upload Scan Report
                </Link>

                <Link
                    href="/vulnerabilities"
                    style={{ color: "white", textDecoration: "none" }}
                >
                    Vulnerabilities
                </Link>
            </div>
        </div>
    );
}