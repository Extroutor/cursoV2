import {Box} from '@mui/material'
import TextFormField from '@/fields/TextFormField.tsx'
import {useTranslation} from "react-i18next";

const FirstStep = () => {
    const { t } = useTranslation()

    return (
        <Box sx={{

        }}>
            <Box sx={{
                fontWeight: '500',
            }}>
                <span>{t('form:address')}</span>
            </Box>
            <TextFormField resettable={true} name='address' autoFocus={true} placeholder="Enter recipient's address or nickname"/>
        </Box>
    )
}

export default FirstStep