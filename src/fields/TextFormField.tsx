import ClearInput from '@/icons/clearInput.tsx'
import {Box, TextField} from '@mui/material'
import {Controller, useFormContext} from 'react-hook-form'
import {validateAddress} from "@/utils/addressValidation"

interface Props {
    name: string
    placeholder?: string,
    resettable?: boolean,
    value?: string
    maxLength?: number
    autoFocus?: boolean
}

const TextFormField = ({name, placeholder, resettable, maxLength, autoFocus = false}: Props) => {
    const {
        control,
        getValues,
        setError,
        clearErrors,
        formState: {errors},
    } = useFormContext()

    // function validateAddress(address: string) {
    //     if ((address.length !== 42) || (!address.startsWith("0x"))) {
    //         // setErr({isError: true, message: 'Invalid address'})
    //         setError('address', {message: 'Invalid address'} )
    //         return
    //     }
    //     clearErrors('address')
    // }

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={getValues(name) || ''}
            render={({field}: any) => (
                <Box>
                    <TextField
                        name={name}
                        placeholder={placeholder ? placeholder : ''}
                        autoFocus={autoFocus}
                        InputProps={{
                            endAdornment: (
                                resettable && field.value.length > 0 &&
                                <Box display='flex' alignItems='center' onClick={() => field.onChange('')}><ClearInput/></Box>
                            ),
                        }}
                        inputProps={{
                            maxLength: maxLength ? maxLength : 200,
                        }}
                        value={field.value} // Убеждаемся, что значение не undefined и заменяем на пустую строку
                        onChange={e => {
                            field.onChange(e.target.value || '')
                            if (name === 'address')
                                validateAddress(e.target.value || '', setError, clearErrors)
                        }}
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
                                    borderColor: errors[name] ? '#FF847E' : '#CECECE',
                                    borderWidth: '1.2px',

                                },
                                '& .MuiOutlinedInput-notchedOutline focused': {
                                    borderColor: errors[name] ? '#FF847E' : '#56AAC8',
                                },
                                "&.Mui-focused": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: errors[name] ? '#FF847E' : '#56AAC8',
                                    },
                                },
                            },
                            '& .MuiOutlinedInput-input': {
                                paddingLeft: '16px',
                                '&::placeholder': {
                                    color: '#B8B8B8',
                                }
                            },
                            '& .MuiInputLabel-outlined': {
                                color: '#292929',
                                padding: '0px'
                            },


                        }}/>
                    {maxLength &&
                        <span style={{
                            float: 'right',
                            fontSize: '14px',
                            color: '#CECECE',
                            marginTop: '6px',
                        }}>{field.value?.length ?? 0} / {maxLength}</span>
                    }
                    {errors[name] &&
                        <Box sx={{
                            color: '#FF847E',
                            fontSize: '14px',
                            mt: '4px'
                        }}>{String(errors[name]?.message)}</Box>
                    }
                </Box>
            )}
        />
    )
}

export default TextFormField