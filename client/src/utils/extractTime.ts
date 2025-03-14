export function extractTime(dateString: string) {
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;
}



// Helper function to pad single-digit number with a leading zero
function padZero (number:any) {
    return number.toString().padStart(2, "0");
}