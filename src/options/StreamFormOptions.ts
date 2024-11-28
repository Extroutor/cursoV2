export const durationOptions = [
    {
        id: 0,
        label: '30 minutes',
    },
    {
        id: 1,
        label: '1 hour',
    },
]

export const rateOptions = [
    {
        id: 0,
        label: '/ minutes',
        value: 60 // 60
    },
    {
        id: 1,
        label: '/ hour',
        value: 60 * 60  // 3600
    },
    {
        id: 3,
        label: '/ day',
        value: 60 * 60 * 24// 86400
    },
    {
        id: 4,
        label: '/ month',
        value: 60 * 60 * 24 * 300 // 2592000
    },
    {
        id: 5,
        label: '/ year',
        value: 60 * 60 * 24 * 30 * 12 // 31104000
    },
]