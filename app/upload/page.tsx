"use client";

import Sidebar from "../dashboard/components/Sidebar";
import Navbar from "../dashboard/components/Navbar";

export default function UploadPage() {
    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "whitesmoke" }}>
            <Sidebar />

            <div style={{ flex: 1 }}>
                <Navbar />

                <div
                    style={{
                        padding: "30px",
                        background: "lightgray",
                        minHeight: "100vh",
                    }}
                >
            <h1>Upload Scan Report</h1>

            <div
                style={{
                    marginTop: "30px",
                    background: "white",
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                    padding: "30px",
                    width: "500px",
                }}
            >
                <input type="file" />

                <br />
                <br />

                <button
                    onClick={async () => {
                        await fetch("/api/upload", {
                            method: "POST",
                        });

                        alert("Scan report uploaded successfully.");
                    }}
                    style={{
                        padding: "10px 20px",
                        background: "blue",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Upload
                </button>
            </div>
                </div>
            </div>
        </div>
    );
}