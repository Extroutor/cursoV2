import {useSelector} from "react-redux";
import {Box, Modal} from "@mui/material";
import {CircularProgress} from "@mui/joy"

const Loading = () => {
    const loading = useSelector((state: any) => state.ui.loading)

    return (
        <Modal
            open={loading}
            sx={{
                border: 'none',
                outline: 'none',
                '& .MuiBackdrop-root': {
                    backgroundColor: 'rgba(0,0,0,0.3)'
                },
            }}
        >
            <Box sx={{
                backgroundColor: '#FFF',
                position: 'fixed',
                top: '50%',
                left: '50%',
                right: '0',
                transform: 'translate(-50%, -50%)',
                borderRadius: '20px',
                width: '62px',
                height: '62px',
                boxSizing: 'border-box',
                border: 'none',
                outline: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
                 onClick={(e) => e.stopPropagation()}
            >
                <CircularProgress value={60} sx={{
                    '.MuiCircularProgress-track': {
                        stroke: 'transparent',
                        strokeWidth: '2.5px'
                    },
                    '.MuiCircularProgress-progress': {
                        stroke: '#56AAC8',
                        strokeWidth: '2.5px'
                    },
                    "--CircularProgress-size": "30px",
                }}/>

            </Box>
        </Modal>
    );
};

export default Loading;