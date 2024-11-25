import {Box} from '@mui/material'
import ProcessedStreamItem from './ProcessedStreamItem.tsx'

const ProcessedStreamList = ({streams}: {streams: any}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
        }}>
            {streams.map((stream: any) => (
                <ProcessedStreamItem key={stream.id} data={stream}/>
            ))}
        </Box>
    )
}

export default ProcessedStreamList