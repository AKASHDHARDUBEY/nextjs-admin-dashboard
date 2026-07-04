type Props = {
    critical: number;
    high: number;
    medium: number;
    low: number;
};

export default function SeverityChart({
    critical,
    high,
    medium,
    low,
}: Props) {

    const total = critical + high + medium + low;

    const data = [
        {
            label: "Critical",
            value: critical,
            color: "red",
        },
        {
            label: "High",
            value: high,
            color: "orange",
        },
        {
            label: "Medium",
            value: medium,
            color: "blue",
        },
        {
            label: "Low",
            value: low,
            color: "green",
        },
    ];

    return (
        <div
            style={{
                background: "white",
                padding: 20,
                borderRadius: 15,
                border: "1px solid gray",
            }}
        >
            <h3>Severity Overview</h3>

            {data.map((item) => (
                <div key={item.label} style={{ marginTop: 20 }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                    </div>

                    <div
                        style={{
                            background: "#ddd",
                            height: 12,
                            borderRadius: 10,
                            marginTop: 8,
                        }}
                    >
                        <div
                            style={{
                                width:
                                    total === 0
                                        ? "0%"
                                        : `${(item.value / total) * 100}%`,
                                height: "100%",
                                background: item.color,
                                borderRadius: 10,
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}