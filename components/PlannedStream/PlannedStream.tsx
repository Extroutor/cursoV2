import {SubtitleTypography} from '../Typography/SubtitleTypography.tsx'
import {Box} from '@mui/material'
import PlannedStreamList from './PlannedStreamList.tsx'
import {useTranslation} from "react-i18next";

const PlannedStream = () => {
    const { t } = useTranslation()

    return (
        <Box sx={{
            mt: '20px'
        }}>
            <SubtitleTypography mb='12px'>{t('streams:planned')}</SubtitleTypography>
            <PlannedStreamList/>
        </Box>
    )
}

export default PlannedStream