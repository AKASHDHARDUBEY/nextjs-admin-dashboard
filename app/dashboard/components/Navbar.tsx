import LogoutButton from "../LogoutButton";

export default function Navbar() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                borderBottom: "1px solid #ddd",
            }}
        >
            <h2>Vynox Security Dashboard</h2>

            <LogoutButton />
        </div>
    );
}