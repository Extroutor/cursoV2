import {Box} from '@mui/material'
import {StatusObj, StatusObjProp} from '@/options/StatusBarOptions.ts'
import {useTranslation} from "react-i18next";

const StatusBar = ({itemID}: { itemID: number }) => {
    const { t } = useTranslation()

    const item: StatusObjProp = StatusObj.find(({id}) => id === itemID) ?? {
        id: 0,
        title: 'processed',
        color: '#F08B34',
        bgcolor: '#FFDFC3'
    }

    return (
        <Box sx={{
            color: item.color,
            bgcolor: item.bgcolor,
            padding: '4px 12px 4px 12px',
            borderRadius: '100px',
            fontSize: '12px',
            lineHeight: '14.06px',
            width: 'max-content',
        }}>{t(`status:${item.title}`)}</Box>
    )
}

export default StatusBar