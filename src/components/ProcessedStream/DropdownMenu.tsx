import {Box} from "@mui/material"
import Repeat from "@/icons/repeat.tsx"
import Stop from "@/icons/stop.tsx"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DropdownMenu = ({setIsOpenCloseModal}: {setIsOpenCloseModal: any}) => {
    return (
        <Box sx={{
            width: '180px',
            bgcolor: '#fff',
            padding: '6px',
            boxShadow: '0px 0px 20px 0px #0000001F',
            borderRadius: '10px',
            position: 'absolute',
            right: '20px',
            top: '44px',
            boxSizing: 'border-box'
        }}
        >
            <Box sx={{
                width: '168px',
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                lineHeight: '18.75px',
                cursor: 'pointer',
            }}>
                <span>Repeat</span>
                <Repeat/>
            </Box>
            <Box sx={{
                width: '168px',
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                lineHeight: '18.75px',
                cursor: 'pointer',
            }}
                 onClick={setIsOpenCloseModal}
            >
                <span style={{color: '#FF847E'}}>Stop</span>
                <Stop/>
            </Box>
        </Box>
    );
};

export default DropdownMenu;