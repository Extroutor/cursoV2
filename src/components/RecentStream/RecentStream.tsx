import {SubtitleTypography} from '../Typography/SubtitleTypography.tsx'
import {Box} from '@mui/material'
import RecentStreamItem from './RecentStreamItem.tsx'
import {useTranslation} from "react-i18next"

const RecentStream = ({streams}: { streams: any }) => {
    const {t} = useTranslation()

    return (
        <>
            {streams && streams.length > 0 &&
                <Box sx={{
                    mt: '20px',
                }}>
                    <SubtitleTypography mb='4px'>{t('streams:recent')}</SubtitleTypography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        {streams.map((stream: any) => (
                            <RecentStreamItem key={stream.id} stream={stream}/>
                        ))}
                    </Box>
                </Box>
            }
        </>
    )
}

export default RecentStream