import {useRouter} from "next/router";

interface Props {
    id: number
    activeItem: number
    setActive: (id: number) => void
}
const HistoryButton = ({id, activeItem, setActive}: Props) => {
    const color = activeItem === id ? '#F4F4F4' : '#8F8F8F'
    const router = useRouter()

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            cursor: 'pointer',
        }}
             onClick={() => {
                 setActive(id)
               router.push('/history')
             }}
        >
            <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path fillRule='evenodd' clipRule='evenodd' d='M4 15C4 8.92487 8.92487 4 15 4C21.0751 4 26 8.92487 26 15C26 21.0751 21.0751 26 15 26C8.92487 26 4 21.0751 4 15ZM15.9706 8.52941C15.9706 7.99337 15.536 7.55882 15 7.55882C14.464 7.55882 14.0294 7.99337 14.0294 8.52941V15C14.0294 15.3347 14.2018 15.6457 14.4856 15.8231L18.3679 18.2495C18.8225 18.5336 19.4213 18.3954 19.7054 17.9409C19.9895 17.4863 19.8513 16.8875 19.3968 16.6034L15.9706 14.4621V8.52941Z' fill={color}/>
            </svg>
            {activeItem === id &&
                <svg width='5' height='4' viewBox='0 0 5 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='2.375' cy='2' r='2' fill='#F4F4F4'/>
                </svg>
            }
        </div>
    );
};

export default HistoryButton;