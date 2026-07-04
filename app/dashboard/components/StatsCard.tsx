type Props = {
    title: string;
    value: string | number;
    color?: string;
};

export default function StatCard({
    title,
    value,
    color = "blue",
}: Props) {
    return (
        <div
            style={{
                background: "white",
                border: "1px solid gray",
                boxShadow: "0 2px 8px lightgray",
                borderRadius: 15,
                padding: 30,
                minWidth: 220,
            }}
        >
            <p style={{ color: "gray" }}>{title}</p>

            <h2
                style={{
                    color: color,
                    fontSize: 32,
                    marginTop: 10,
                }}
            >
                {value}
            </h2>
        </div>
    );
}