export async function getVulnerabilities(packageName: string) {
  const response = await fetch(
    "https://api.osv.dev/v1/query",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        package: {
          name: packageName,
          ecosystem: "npm",
        },
      }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch vulnerabilities");
  }

  const data = await response.json();

  return data.vulns || [];
}
