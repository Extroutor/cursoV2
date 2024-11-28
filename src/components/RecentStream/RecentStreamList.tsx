import {Box} from '@mui/material'
import RecentStreamItem from './RecentStreamItem.tsx'
import useStreams from "@/hooks/useStreams.tsx"
import {useEffect, useState} from "react"
import {SubtitleTypography} from "../Typography/SubtitleTypography.tsx"

const RecentStreamList = () => {
    const [groupedStream, setGroupedStream] = useState({})
    const {streams} = useStreams()

    useEffect(() => {
        const groupByDate = () => {
            const grouped: any = {}
            streams.forEach((transaction: any) => {
                const date = new Date(transaction.start_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })
                if (!grouped[date]) {
                    grouped[date] = []
                }
                grouped[date].push(transaction)
            })
            setGroupedStream(grouped)
        }

        groupByDate()
    }, [streams])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            {groupedStream && Object.keys(groupedStream).map((date) => (
                <Box key={date} marginTop='12px'>
                    <SubtitleTypography marginBottom='12px'>{date}</SubtitleTypography>
                    <ul style={{
                        padding: 0,
                        margin: 0,
                    }}>
                        {/*@ts-ignore*/}
                        {groupedStream[date].map((stream) => (
                            <RecentStreamItem key={stream.id} stream={stream}/>
                        ))}
                    </ul>
                </Box>
            ))}
        </Box>
    )
}

export default RecentStreamList