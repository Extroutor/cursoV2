import {SubtitleTypography} from '../Typography/SubtitleTypography.tsx'
import {Box} from '@mui/material'
import RecentStreamItem from './RecentStreamItem.tsx'
import {useTranslation} from "react-i18next"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                        {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
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