export const formatDuration = (milliseconds: number): string => {
    const seconds = Math.floor(milliseconds / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const hoursString = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''}` : ''
    const minutesString = minutes % 60 > 0 ? ` ${minutes % 60} minute${minutes % 60 > 1 ? 's' : ''}` : ''

    return `${hoursString} ${minutesString.trim()}`.replace(/^ /, '')
}