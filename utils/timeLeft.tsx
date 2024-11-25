export function timeLeft(endDate: string | number) {
    // Convert endDate to a Date object
    // @ts-ignore
    const endDateTime = new Date(endDate * 1000)

    // Get the current time
    const now = new Date();

    // Calculate the difference between the two times
    // @ts-ignore
    const timeDiff = endDateTime - now

    // Calculate the time left in hours, minutes, and seconds
    const hours = Math.floor(timeDiff / (1000 * 60 * 60))
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
    // const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Format the time left as a string
    let timeLeftString = ""
    if (hours > 0) {
        timeLeftString += `${hours} hour${hours > 1 ? "s" : ""} `
    }
    if (minutes > 0) {
        timeLeftString += `${minutes} minute${minutes > 1 ? "s" : ""} `
    }
    // if (seconds > 0) {
    //     timeLeftString += `${seconds} second${seconds > 1 ? "s" : ""} `;
    // }
    timeLeftString = timeLeftString.trim()

    // Return the time left string
    return timeLeftString ? timeLeftString + " left" : undefined
}