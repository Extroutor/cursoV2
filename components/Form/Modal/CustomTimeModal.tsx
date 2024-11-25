import {Box} from '@mui/material'
import CustomModal from './CustomModal.tsx'
import Close from '../../../icons/close.tsx'
import TimePicker from '../TimePicker.tsx'
import {useState} from "react"
import {Controller, useFormContext} from 'react-hook-form'

interface Props {
    name: string
    openModal: boolean,
    handleModalClose: () => void,
}

const CustomTimeModal = ({name, openModal, handleModalClose}: Props) => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const isDisabledButton = minutes === 0 && hours === 0

    const {
        control,
        // formState: { errors },
    } = useFormContext()

    const handleHoursChange = (event: any) => {
        setHours(parseInt(event.target.value, 10))
    }

    const handleMinutesChange = (event: any) => {
        setMinutes(parseInt(event.target.value, 10))
    }

    return (
        <CustomModal openModal={openModal} handleModalClose={handleModalClose}>

            <Box sx={{
                bgcolor: '#FFF',
                position: 'fixed',
                bottom: '0',
                borderRadius: '20px 20px 0px 0px',
                width: '100%',
                padding: '0 20px',
                boxSizing: 'border-box',
                border: 'none',
                outline: 'none',
            }}>
                <Controller
                    name={name}
                    control={control}
                    render={({field}: any) => (
                        <Box>
                            <Box sx={{
                                fontSize: '20px',
                                fontWeight: '700',
                                lineHeight: '23.44px',
                                padding: '21px 0 10px',
                            }}>
                                Custom Duration
                            </Box>
                            <Box sx={{
                                position: 'absolute',
                                top: '15px',
                                right: '15px'
                            }}
                                 onClick={handleModalClose}
                            ><Close/></Box>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                p: '10px 0'
                            }}>
                                <TimePicker
                                    hours={hours}
                                    minutes={minutes}
                                    handleHoursChange={handleHoursChange}
                                    handleMinutesChange={handleMinutesChange}
                                />
                            </Box>

                            <Box
                                sx={{
                                    bgcolor: isDisabledButton ? '#E5E5E5' : '#56AAC8',
                                    color: isDisabledButton ? '#8F8F8F' : '#292929',
                                    fontWeight: '500',
                                    fontSize: '16px',
                                    lineHeight: '18.75px',
                                    textAlign: 'center',
                                    borderRadius: '100px',
                                    padding: '10px 24px',
                                    width: '100%',
                                    boxSizing: 'border-box',
                                    margin: '20px 0',
                                    cursor: 'pointer',
                                }}
                                onClick={() => {
                                    if (!isDisabledButton) {
                                        field.onChange((hours * 60 * 60 * 1000) + (minutes * 60 * 1000))
                                        handleModalClose()
                                    }
                                }}
                            >
                                Confirm
                            </Box>
                        </Box>
                    )}/>
            </Box>
        </CustomModal>
    )
}

export default CustomTimeModal