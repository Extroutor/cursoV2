export function timeLeft(endDate: string | number ) {
  // Convert endDate to a Date object
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const endDateNumeric = typeof endDate === 'string' ? Number(endDate) : endDate;

  if (isNaN(endDateNumeric)) {
    throw new Error('Invalid endDate: must be a number or a string that can be converted to a number');
  }

  // Преобразуем endDate в объект Date
  const endDateTime = new Date(endDateNumeric * 1000);

  // Get the current time
  const now = new Date();

  // Calculate the difference between the two times
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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