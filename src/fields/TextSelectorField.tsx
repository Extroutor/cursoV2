import {Box} from '@mui/material'
import SelectorArrow from '@/icons/selectorArrow.tsx'
import {useState} from 'react'
import {Controller, useFormContext} from 'react-hook-form';
import {amountValidation} from "@/utils/amountValidation";
import {rateOptions} from "@/options/StreamFormOptions.ts";

interface Props {
    name: string,
    onModalOpen: () => void,
}

const TextSelectorField = ({name, onModalOpen}: Props) => {
    const [onInputFocus, setOnInputFocus] = useState(false)
    const {
        control,
        getValues,
        setError,
        clearErrors,
        formState: {errors},
    } = useFormContext()

    const defaultVal = rateOptions.find((item) => Number(getValues('rate')) === item.id)?.label

    return (
        <>
            <Box sx={{
                display: 'flex',
                marginTop: '8px',
                alignItems: 'center',
                height: '44px',
                width: '100%',
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'nowrap',
                    border: onInputFocus ? '1.2px solid' : '1.2px solid',
                    borderColor: errors[name] ? '#FF847E' : onInputFocus ? '#56AAC8' : '#CECECE',
                    borderRadius: '10px 0 0 10px',
                    marginRight: '-1.2px',
                    padding: '12px 16px',
                    height: '18px',
                    flex: '1',
                    zIndex: onInputFocus ? '2' : '1',
                }}>
                    <Controller
                        name={name}
                        control={control}
                        defaultValue={getValues(name) || ''}
                        render={({field}: any) => (
                            <input
                                name={name}
                                className='form_input'
                                value={field.value} // Убеждаемся, что значение не undefined и заменяем на пустую строку
                                placeholder='100'
                                onFocus={() => setOnInputFocus(true)}
                                onBlur={() => setOnInputFocus(false)}
                                onChange={e => {
                                    field.onChange(e.target.value || '')
                                    amountValidation(e.target.value || '', setError, clearErrors)
                                }}
                            />
                        )}/>
                    <span style={{
                        paddingLeft: '16px',
                        fontSize: '16px',
                        textTransform: 'uppercase',
                    }}>usd</span>

                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0px 16px',
                    width: '140px',
                    height: '44px',
                    border: '1.2px solid #CECECE',
                    borderRadius: '0 10px 10px 0',
                    boxSizing: 'border-box',
                    cursor: 'pointer'
                }}
                     onClick={onModalOpen}
                >
                    <span>{defaultVal}</span>
                    <SelectorArrow/>
                </Box>
            </Box>
            {errors[name] &&
                <Box sx={{
                    color: '#FF847E',
                    fontSize: '14px',
                    mt: '4px'
                }}>{String(errors[name]?.message)}</Box>
            }
        </>
    )
}

export default TextSelectorField