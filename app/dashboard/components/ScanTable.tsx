export default function ScanTable() {
    return (
        <div
            style={{
                background: "white",
                border: "1px solid gray",
                borderRadius: "10px",
                padding: "20px",
                marginTop: "20px",
            }}
        >
            <h2>Recent Vulnerability Scans</h2>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: "20px",
                }}
            >
                <thead>
                    <tr>
                        <th>Target</th>
                        <th>Status</th>
                        <th>Risk</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>example.com</td>
                        <td>Completed</td>
                        <td style={{ color: "red" }}>Critical</td>
                    </tr>

                    <tr>
                        <td>test.com</td>
                        <td>Running</td>
                        <td style={{ color: "orange" }}>High</td>
                    </tr>

                    <tr>
                        <td>demo.com</td>
                        <td>Completed</td>
                        <td style={{ color: "green" }}>Low</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}