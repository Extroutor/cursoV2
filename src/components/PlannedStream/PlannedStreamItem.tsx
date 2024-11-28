import {Box} from '@mui/material'
import Time from '@/icons/time.tsx'
import StatusBar from '../StatusBar.tsx'
import DeleteWhite from "@/icons/deleteWhite.tsx"

const PlannedStreamItem = () => {
    return (
        <Box sx={{
            bgcolor: '#292929',
            padding: '20px',
            borderRadius: '20px',
            width: '220px',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
        }}>

            <Box position='relative'>
                <Box>Jack Jones</Box>
                <Box sx={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                }}><DeleteWhite/></Box>
            </Box>

            <Box sx={{
                fontSize: '18px',
                lineHeight: '21.1px',
                fontWeight: '700',
            }}>
                $1,200
            </Box>

            <Box display='flex' justifyContent='center' flexDirection='column' gap='8px'>
                <Box display='flex' alignItems='center'>
                    <Box display='flex' alignItems='center' mr='4px'><Time isWhite={true}/></Box>
                    <Box sx={{
                        fontSize: '12px',
                        lineHeight: '14.06px',
                    }}>2 hours 3 minutes left</Box>
                </Box>
                <StatusBar itemID={3}/>
            </Box>

        </Box>
    )
}

export default PlannedStreamItem