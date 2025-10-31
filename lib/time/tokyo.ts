export function getTokyoTime(): string {
  const now = new Date();
  
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Tokyo',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(now);
}

