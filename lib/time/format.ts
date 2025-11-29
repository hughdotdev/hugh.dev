export function formatDate(
  dateString: string,
  options: { format?: "short" | "long" } = {}
): string {
  const { format = "short" } = options;
  const date = new Date(dateString);

  if (isNaN(date.getTime())) return "Invalid date";

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: format === "long" ? "long" : "short",
    day: "numeric",
  }).format(date);
}

export function getTokyoTime(): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tokyo",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}
