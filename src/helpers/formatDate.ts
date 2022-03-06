import { format } from "date-fns";

export default function formatDate(
  timestamp: string,
  formatStr = "MMM do, yyyy"
) {
  if (!timestamp) {
    return false;
  }

  try {
    return format(
      typeof timestamp === "string"
        ? new Date(Date.parse(timestamp))
        : parseInt(timestamp),
      formatStr
    );
  } catch (e) {
    console.log("Error formatting date", e);
  }

  return timestamp;
}
