import {Box, FormControlLabel, Radio, RadioGroup} from '@mui/material'
import CustomModal from './CustomModal.tsx'
import Close from '@/icons/close.tsx'
import {useState} from "react"
import {Controller, useFormContext} from 'react-hook-form'
import {CancelObj} from "@/options/cancelationOptions.tsx"
import {useTranslation} from "react-i18next"

interface Props {
    name: string,
    defaultValue: string,
    openModal: boolean,
    handleModalClose: () => void,
}

const CancellationModal = ({name, defaultValue, openModal, handleModalClose}: Props) => {
    const [value, setValue] = useState<number | string>(defaultValue)
    const {t} = useTranslation()
    const {
        control,
        getValues,
    } = useFormContext()


    const defaultVal = CancelObj.find((item) => getValues(name) === item.id)?.sign

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
                    defaultValue={t(`cancel:${defaultVal}`) || null}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    render={({field}: any) => (
                        <Box>
                            <Box sx={{
                                fontSize: '20px',
                                fontWeight: '700',
                                lineHeight: '23.44px',
                                padding: '21px 0 10px',
                            }}>
                                Cancellation
                            </Box>
                            <Box sx={{
                                position: 'absolute',
                                top: '15px',
                                right: '15px'
                            }}
                                 onClick={handleModalClose}
                            ><Close/></Box>

                            <Box>
                                <RadioGroup
                                    aria-labelledby='demo-radio-buttons-group-label'
                                    defaultValue={t(`cancel:${defaultVal}`)}
                                    value={value}
                                    onChange={e => setValue(Number(e.target.value) || 0)}
                                    sx={{
                                        '& .MuiRadio-root': {
                                            color: '#CECECE',
                                        },
                                        '& .MuiRadio-root.Mui-checked': {
                                            color: '#56AAC8', // Цвет выделенного чекбокса
                                        },
                                    }}
                                >
                                    {CancelObj.map(item => (
                                        <FormControlLabel
                                            key={item.id}
                                            value={item.id}
                                            label={t(`cancel:${item.sign}`)}
                                            control={<Radio/>}
                                        />
                                    ))}
                                </RadioGroup>
                            </Box>

                            <Box
                                sx={{
                                    bgcolor: '#56AAC8',
                                    fontWeight: '500',
                                    fontSize: '16px',
                                    lineHeight: '18.75px',
                                    textAlign: 'center',
                                    borderRadius: '100px',
                                    padding: '10px 24px',
                                    width: '100%',
                                    boxSizing: 'border-box',
                                    margin: '20px 0'
                                }}
                                onClick={() => {
                                    field.onChange(value)
                                    handleModalClose()
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

export default CancellationModal;