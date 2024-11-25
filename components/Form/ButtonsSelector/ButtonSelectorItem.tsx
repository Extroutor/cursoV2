import {Dispatch, SetStateAction} from 'react'
import {Buttons} from '../../../styledComponents/buttons.tsx';

interface Props {
    id: number
    label: string,
    isActive: boolean,
    setActive: Dispatch<SetStateAction<number | undefined>>
}

const ButtonSelectorItem = ({id, label, isActive, setActive}: Props) => {
    return (
        <Buttons
            sx={{
                borderColor: isActive ? '#56AAC8' : '#CECECE',
                borderWidth: isActive ? '2px' : '1.2px',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer'
            }}
            onClick={() => {
                setActive(id)
            }}
        >
            <div>{label}</div>
        </Buttons>
    );
};

export default ButtonSelectorItem
