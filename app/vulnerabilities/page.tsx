import { getVulnerabilities } from "@/lib/osv";

type Props = {
  searchParams: Promise<{
    search?: string;
    severity?: string;
  }>;
};

export default async function VulnerabilitiesPage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const search = params.search || "lodash";
  const severity = params.severity || "";

  const allVulnerabilities = await getVulnerabilities(search);

  const vulnerabilities = severity
    ? allVulnerabilities.filter(
        (v: any) =>
          v.database_specific?.severity === severity
      )
    : allVulnerabilities;

  return (
    <div
      style={{
        padding: "30px",
        background: "whitesmoke",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
            }}
          >
            Vulnerability Scanner
          </h1>

          <p
            style={{
              color: "gray",
            }}
          >
            Live vulnerabilities from Google OSV
          </p>
        </div>
      </div>

      <br />

      <form
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          name="search"
          defaultValue={search}
          placeholder="Search package"
          style={{
            padding: "10px",
            width: "250px",
          }}
        />

        <select
          name="severity"
          style={{
            padding: "10px",
          }}
        >
          <option value="">All</option>
          <option value="CRITICAL">Critical</option>
          <option value="HIGH">High</option>
          <option value="MODERATE">Moderate</option>
          <option value="LOW">Low</option>
        </select>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
          }}
        >
          Search
        </button>
      </form>

      <br />

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 2px 8px lightgray",
        }}
      >
        <thead>
          <tr>
            <th style={{ background: "black", color: "white", padding: "12px" }}>
              ID
            </th>

            <th style={{ background: "black", color: "white", padding: "12px" }}>
              Summary
            </th>

            <th style={{ background: "black", color: "white", padding: "12px" }}>
              Severity
            </th>

            <th style={{ background: "black", color: "white", padding: "12px" }}>
              Package
            </th>
          </tr>
        </thead>

        <tbody>
          {vulnerabilities.map((item: any) => (
            <tr key={item.id}>
              <td style={{ borderBottom: "1px solid lightgray", padding: "10px" }}>
                {item.id}
              </td>

              <td style={{ borderBottom: "1px solid lightgray", padding: "10px" }}>
                {item.summary || "No summary"}
              </td>

              <td
                style={{
                  borderBottom: "1px solid lightgray",
                  padding: "10px",
                }}
              >
                <span
                  style={{
                    padding: "5px 10px",
                    borderRadius: "20px",
                    color: "white",
                    background:
                      item.database_specific?.severity === "CRITICAL"
                        ? "red"
                        : item.database_specific?.severity === "HIGH"
                        ? "orange"
                        : item.database_specific?.severity === "MODERATE"
                        ? "blue"
                        : "green",
                  }}
                >
                  {item.database_specific?.severity || "UNKNOWN"}
                </span>
              </td>

              <td style={{ borderBottom: "1px solid lightgray", padding: "10px" }}>
                {search}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
