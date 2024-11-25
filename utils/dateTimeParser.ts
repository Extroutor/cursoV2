export function parseDateTime(dateTimeString: string | number) {
    const dateTime = new Date(Number(dateTimeString));

    const day = dateTime.getDate();
    const month = dateTime.toLocaleString("en-US", { month: "long" });
    const year = dateTime.getFullYear();
    const hour = dateTime.getHours();
    const minute = dateTime.getMinutes();

    return `${day} ${month} ${year}, ${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
}