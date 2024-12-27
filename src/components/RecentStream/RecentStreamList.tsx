import {Box} from '@mui/material'
import RecentStreamItem from './RecentStreamItem.tsx'
import useStreams from "@/hooks/useStreams.tsx"
import {useEffect, useState} from "react"
import {SubtitleTypography} from "../Typography/SubtitleTypography.tsx"

type GroupedStream = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [date: string]: any[]
}
const RecentStreamList = () => {
  const [groupedStream, setGroupedStream] = useState<GroupedStream>({});
  const {streams} = useStreams();

  useEffect(() => {
    const groupByDate = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const grouped: any = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      streams.forEach((transaction: any) => {
        const date = new Date(transaction.start_date).toLocaleDateString('en-GB', {day: 'numeric', month: 'long'})
        if (!grouped[date]) {
          grouped[date] = []
        }
        grouped[date].unshift(transaction)
      });

      const reversedGrouped = Object.keys(grouped)
        .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
        .reduce((acc, key) => {
          acc[key] = grouped[key];
          return acc;
        }, {});

      setGroupedStream(reversedGrouped)
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
            {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
            {groupedStream[date]?.map((stream) => (
              <RecentStreamItem key={stream.id} stream={stream}/>
            ))}
          </ul>
        </Box>
      ))}
    </Box>
  )
}

export default RecentStreamList