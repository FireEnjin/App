import Papa from "papaparse";

export default async function downloadCSV(args: {
  filename?: string;
  data?: any[];
}) {
  let filename = args?.filename || "export.csv";

  let csv = Papa.unparse(args.data);
  if (csv == null) return;

  var blob = new Blob([csv], { type: "text/csv" });
  if ((window as any)?.navigator?.msSaveOrOpenBlob) {
    // IE hack; see http://msdn.microsoft.com/en-us/library/ie/hh779016.aspx
    (window as any).navigator.msSaveBlob(blob, args.filename);
  } else {
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
    a.click();
    document.body.removeChild(a);
  }
}
