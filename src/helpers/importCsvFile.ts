export default async function importCsvFile(file: File, collection: string) {
  const body = new FormData();
  body.append("file", file);
  body.append("type", "import");
  body.append("id", collection);
  body.append("mimeType", "text/csv");
  const res = await fetch(
    `${
      window?.location?.host?.includes?.("localhost")
        ? "https://theflood.team"
        : ""
    }/upload`,
    {
      method: "POST",
      body,
    }
  );
  console.log(await res.text());
  return [];
}
