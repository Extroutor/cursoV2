import {useRouter} from "next/router";

interface Props {
    id: number
    activeItem: number
    setActive: (id: number) => void
}
const SettingsButton = ({id, activeItem, setActive}: Props) => {
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
               router.push('/settings')
             }}
        >
            <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M15 10.838C12.7041 10.838 10.843 12.7014 10.843 15C10.843 17.2986 12.7041 19.162 15 19.162C17.2958 19.162 19.1569 17.2986 19.1569 15C19.1569 12.7014 17.2958 10.838 15 10.838Z' fill={color}/>
                <path fillRule='evenodd' clipRule='evenodd' d='M15.8696 3.22562C15.3288 2.92479 14.6712 2.92479 14.1304 3.22562L4.92106 8.34811C4.35257 8.66432 4 9.26425 4 9.91537V20.0846C4 20.7357 4.35257 21.3357 4.92106 21.6519L14.1304 26.7744C14.6712 27.0752 15.3288 27.0752 15.8696 26.7744L25.0789 21.6519C25.6474 21.3357 26 20.7357 26 20.0846V9.91537C26 9.26425 25.6474 8.66432 25.0789 8.34811L15.8696 3.22562ZM8.92439 15C8.92439 11.6405 11.6445 8.91702 15 8.91702C18.3554 8.91702 21.0756 11.6405 21.0756 15C21.0756 18.3595 18.3554 21.0829 15 21.0829C11.6445 21.0829 8.92439 18.3595 8.92439 15Z' fill={color}/>
            </svg>
            {activeItem === id &&
                <svg width='5' height='4' viewBox='0 0 5 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle cx='2.375' cy='2' r='2' fill='#F4F4F4'/>
                </svg>
            }
        </div>
    );
};

export default SettingsButton;