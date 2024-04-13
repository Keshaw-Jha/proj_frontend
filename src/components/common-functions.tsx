export function convertUtcToIst(utcDate: Date): string {
  // Convert UTC date string to Date object
  const utcDateTime = new Date(utcDate);

  // Add 5 hours and 30 minutes to UTC time to get IST time
  utcDateTime.setHours(utcDateTime.getHours() );
  utcDateTime.setMinutes(utcDateTime.getMinutes());

  // Convert to IST date string with format "dd/mm/yy hour:min am/pm"
  const istDateString = utcDateTime.toLocaleString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // Return the formatted IST date string
  return istDateString;
}
