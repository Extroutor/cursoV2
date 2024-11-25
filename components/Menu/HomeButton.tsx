import {useRouter} from "next/router";

interface Props {
    id: number
    activeItem: number
    setActive: (id: number) => void
}

const HomeButton = ({id, activeItem, setActive}: Props) => {
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
               router.push('/')
             }}
        >
            <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M17.1274 4.92366C15.9637 3.69211 14.0363 3.69211 12.8727 4.92366L7.18902 10.9389C6.8626 11.2844 6.64326 11.7211 6.55862 12.1941C5.86836 16.0516 5.81741 20.0006 6.4079 23.8754L6.61697 25.2473C6.683 25.6806 7.04718 26 7.47514 26H11.4466C11.7737 26 12.0389 25.7283 12.0389 25.3931V16.8965H17.9612V25.3931C17.9612 25.7283 18.2264 26 18.5534 26H22.5249C22.9528 26 23.317 25.6806 23.383 25.2473L23.5921 23.8754C24.1826 20.0006 24.1316 16.0516 23.4414 12.1941C23.3567 11.7211 23.1374 11.2844 22.811 10.9389L17.1274 4.92366Z' fill={color}/>
            </svg>
            {activeItem === id &&
                <svg width='5' height='4' viewBox='0 0 5 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='2.375' cy='2' r='2' fill='#F4F4F4'/>
                </svg>
            }
        </div>
    );
};

export default HomeButton