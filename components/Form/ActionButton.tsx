import {Box} from '@mui/material'
import {useFormContext} from "react-hook-form"

const ActionButton = ({step, changeStep, title}: { step?: number, changeStep: any, title: string }) => {
    const {
        watch,
        formState: {errors},
    } = useFormContext()

    const isDisabled = Object.keys(errors).length !== 0
        || (step === 0 && !watch('address'))
        || (step === 1 && (!watch('amount') || !watch('duration')))

    return (
        <Box sx={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            left: '20px',
            maxWidth: '800px',
            margin: '0 auto',
            cursor: 'pointer'
        }}
             onClick={() => {
                 if (!isDisabled) changeStep()
             }}
        >
            <Box sx={{
                backgroundColor: isDisabled ? '#E5E5E5' : '#56AAC8',
                color: isDisabled ? '#8F8F8F' : '#292929',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '18.75px',
                textAlign: 'center',
                borderRadius: '100px',
                padding: '10px 24px'
            }}>
                {title}
            </Box>
        </Box>
    );
};

export default ActionButton