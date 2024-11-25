import {Box} from '@mui/material'
import PlannedStreamItem from './PlannedStreamItem.tsx'

const PlannedStreamList = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
        }}>
            <PlannedStreamItem/>
            <PlannedStreamItem/>
        </Box>
    )
}

export default PlannedStreamList