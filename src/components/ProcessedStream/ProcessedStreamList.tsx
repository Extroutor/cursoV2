import {Box} from '@mui/material'
import ProcessedStreamItem from './ProcessedStreamItem.tsx'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProcessedStreamList = ({streams}: {streams: any}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
        }}>
           {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
            {streams.map((stream: any) => (
                <ProcessedStreamItem key={stream.id} data={stream}/>
            ))}
        </Box>
    )
}

export default ProcessedStreamList