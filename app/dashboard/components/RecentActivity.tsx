type Props = {
    vulnerabilities: {
        id: string;
        title: string;
        severity: string;
        status: string;
    }[];
};

export default function RecentActivity({
    vulnerabilities,
}: Props) {
    return (
        <div
            style={{
                background: "white",
                border: "1px solid gray",
                borderRadius: 15,
                padding: 20,
            }}
        >
            <h3>Recent Activity</h3>

            {vulnerabilities.length === 0 ? (
                <p>No vulnerabilities found.</p>
            ) : (
                vulnerabilities.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            padding: "12px 0",
                            borderBottom: "1px solid lightgray",
                        }}
                    >
                        <strong>{item.title}</strong>

                        <br />

                        Severity: {item.severity}

                        <br />

                        Status: {item.status}
                    </div>
                ))
            )}
        </div>
    );
}