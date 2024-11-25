import {durationOptions} from "../../../options/StreamFormOptions.ts";
import {useState} from "react";
import {Controller, useFormContext} from "react-hook-form";
import {Box} from "@mui/material";
import ButtonSelectorItem from "./ButtonSelectorItem.tsx";
import {Buttons} from "../../../styledComponents/buttons.tsx"
import {formatDuration} from "../../../utils/milsecConverter.ts"
import Edit from "../../../icons/edit.tsx";


const ButtonSelector = ({name, onModalOpen, defaultValue}: {name: string, onModalOpen: any, defaultValue: any }) => {
    const [active, setActive] = useState<number | undefined>(
        defaultValue === 30 * (60 * 1000)
            ? 0
            : defaultValue === 60 * (60 * 1000)
                ? 1
                : -1)
    const {control} = useFormContext()

    return (
        <Controller
            name={name}
            control={control}
            render={({field}: any) => (
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    marginTop: '8px',
                    boxSizing: 'border-box',
                    maxHeight: '52px',
                }}>
                    {durationOptions.map(({id, label}) =>
                        <ButtonSelectorItem
                            id={id}
                            key={id}
                            label={label}
                            isActive={id === active}
                            setActive={(id) => {
                                setActive(id)
                                const value = id === 0 ? 30 * 60 * 1000 : 60 * 60 * 1000
                                field.onChange(value)
                            }}
                        />
                    )}
                    <Buttons
                        sx={{
                            borderColor: active === 2 ? '#56AAC8' : '#CECECE',
                            borderWidth: active === 2 ? '2px' : '1.2px',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            setActive(2)
                            field.onChange(2)
                            onModalOpen(true)
                        }}
                    >
                        <span>{active === 2 && defaultValue ? formatDuration(defaultValue) : 'Custom'}</span>
                        {active === 2
                            ? <Box sx={{
                                position: 'absolute',
                                top: '3px',
                                right: '3px',
                            }}>
                                <Edit/>
                            </Box>
                            : <></>
                        }
                    </Buttons>
                </Box>
            )}/>
    )
}

export default ButtonSelector

