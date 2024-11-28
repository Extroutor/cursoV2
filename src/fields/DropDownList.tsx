import {TextField} from '@mui/material'
import SelectorArrow from '@/icons/selectorArrow.tsx'
import {CancelObj} from "@/options/cancelationOptions.tsx"
import {useFormContext} from "react-hook-form"
import {useTranslation} from "react-i18next"

interface Props {
    value: string,
    name: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick: any
}

const DropDownList = ({name, onClick}: Props) => {
    const {getValues,} = useFormContext()
    const {t} = useTranslation()
    const defaultVal = CancelObj.find((item) => Number(getValues(name)) === item.id)?.sign

    return (
        <TextField
            InputProps={{
                readOnly: true,
                endAdornment: <SelectorArrow/>,
            }}
            value={t(`cancel:${defaultVal}`) || null}
            onClick={onClick}
            sx={{
                marginTop: '8px',
                width: '100%',

                '& .MuiOutlinedInput-root': {
                    color: '#292929',
                    height: '44px',
                    width: '100%',
                    borderRadius: '10px',
                    fontSize: '16px',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#CECECE',
                        borderWidth: '1.2px',
                    },
                    '& .MuiOutlinedInput-notchedOutline active': {
                        borderColor: '#56AAC8',
                    },

                },
                '& .MuiOutlinedInput-input': {
                    padding: '0',
                    paddingLeft: '16px',
                    cursor: 'pointer',
                },
                '& .MuiInputLabel-outlined': {
                    color: '#292929',
                },
            }}/>
    );
};

export default DropDownList