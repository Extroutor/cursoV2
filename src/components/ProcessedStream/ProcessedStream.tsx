import {Box} from '@mui/material'
import {SubtitleTypography} from '../Typography/SubtitleTypography.tsx'
import ProcessedStreamList from "./ProcessedStreamList.tsx"
import NoProcessedStream from "./NoProcessedStream.tsx"
import {useTranslation} from "react-i18next";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProcessedStream = ({streams}: {streams: any}) => {
    const { t } = useTranslation()

    return (
        <Box mt='20px'>
            <SubtitleTypography mb='12px'>{t('streams:processed')}</SubtitleTypography>
            {streams.length > 0
                ? <ProcessedStreamList streams={streams}/>
                : <NoProcessedStream/>
            }
        </Box>
    )
}

export default ProcessedStream