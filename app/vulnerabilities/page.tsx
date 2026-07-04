import { getVulnerabilities } from "@/lib/osv";

type Props = {
  searchParams: Promise<{
    search?: string;
  }>;
};

export default async function VulnerabilitiesPage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const search = params.search || "lodash";

  const vulnerabilities = await getVulnerabilities(search);

  return (
    <div
      style={{
        padding: "30px",
        background: "whitesmoke",
        minHeight: "100vh",
      }}
    >
      <h1>OSV Vulnerabilities</h1>

      <br />

      <form>
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

        <button
          type="submit"
          style={{
            marginLeft: "10px",
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
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid gray", padding: "10px" }}>
              ID
            </th>

            <th style={{ border: "1px solid gray", padding: "10px" }}>
              Summary
            </th>

            <th style={{ border: "1px solid gray", padding: "10px" }}>
              Severity
            </th>

            <th style={{ border: "1px solid gray", padding: "10px" }}>
              Package
            </th>
          </tr>
        </thead>

        <tbody>
          {vulnerabilities.map((item: any) => (
            <tr key={item.id}>
              <td style={{ border: "1px solid lightgray", padding: "10px" }}>
                {item.id}
              </td>

              <td style={{ border: "1px solid lightgray", padding: "10px" }}>
                {item.summary || "No summary"}
              </td>

              <td style={{ border: "1px solid lightgray", padding: "10px" }}>
                {item.database_specific?.severity || "Unknown"}
              </td>

              <td style={{ border: "1px solid lightgray", padding: "10px" }}>
                {search}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
