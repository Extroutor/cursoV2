import {Box, FormControlLabel, Radio, RadioGroup} from '@mui/material'
import CustomModal from './CustomModal.tsx'
import Close from '@/icons/close.tsx'
import {Controller, useFormContext} from 'react-hook-form'
import {useState} from "react"
import {rateOptions} from "@/options/StreamFormOptions.ts";

interface Props {
    name: string
    openModal: boolean,
    handleModalClose: () => void,
    defaultValue: string
}

const RateModal = ({name, openModal, handleModalClose, defaultValue}: Props) => {
    const [value, setValue] = useState<number | string>(defaultValue)

    const {
        control,
        getValues,
    } = useFormContext()

    const defaultVal = rateOptions.find((item) => getValues(name) === item.id)?.label

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
                    defaultValue={defaultVal || null}
                    render={({field}: any) => (
                        <Box>
                            <Box sx={{
                                fontSize: '20px',
                                fontWeight: '700',
                                lineHeight: '23.44px',
                                padding: '21px 0 10px',
                            }}>
                                Time Unit
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
                                    defaultValue={defaultValue}
                                    value={value}
                                    onChange={e => setValue(Number(e.target.value) || 0)}
                                >
                                    {rateOptions.map((item) => (
                                        <FormControlLabel key={item.id} value={item.id} control={<Radio/>} label={item.label}/>
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

export default RateModal