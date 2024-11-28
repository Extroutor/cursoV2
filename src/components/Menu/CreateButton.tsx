import {useRouter} from "next/router";

interface Props {
    id: number
    activeItem?: number
    setActive: (id: number) => void
}

const CreateButton = ({id, setActive}: Props) => {
    const router = useRouter()

    return (
        <div style={{
            padding: '10px',
            borderRadius: '100px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#56AAC8',
            cursor: 'pointer',
        }}
             onClick={() => {
                 setActive(id)
               router.push('/create')
             }}
        >
            <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M16.0435 8.04348C16.0435 7.46718 15.5763 7 15 7C14.4237 7 13.9565 7.46718 13.9565 8.04348V13.9565H8.04348C7.46718 13.9565 7 14.4237 7 15C7 15.5763 7.46718 16.0435 8.04348 16.0435H13.9565V21.9565C13.9565 22.5328 14.4237 23 15 23C15.5763 23 16.0435 22.5328 16.0435 21.9565V16.0435H21.9565C22.5328 16.0435 23 15.5763 23 15C23 14.4237 22.5328 13.9565 21.9565 13.9565H16.0435V8.04348Z'
                    fill='#292929'/>
            </svg>
        </div>
    )
};

export default CreateButton;