import Papa from "papaparse";

export default async function downloadCSV(args: {
  filename?: string;
  data?: any[];
}) {
  const filename = args?.filename || "export.csv";

  const csv = Papa.unparse(args.data as any);
  if (csv == null) return;

  const blob = new Blob([csv], { type: "text/csv" });
  if ((window as any)?.navigator?.msSaveOrOpenBlob) {
    // IE hack; see http://msdn.microsoft.com/en-us/library/ie/hh779016.aspx
    (window as any).navigator.msSaveBlob(blob, args.filename);
  } else {
    const a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
    a.click();
    document.body.removeChild(a);
  }
}
