"use client";

export default function UploadPage() {
    return (
        <div
            style={{
                padding: "40px",
                background: "whitesmoke",
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

                        alert("Demo vulnerabilities uploaded!");
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
    );
}