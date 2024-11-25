import {Box, Modal} from '@mui/material'


const MainCustomModal = ({children, isOpen, setOpen}: { children: any, isOpen: boolean, setOpen: any }) => {

    return (
        <Modal
            open={isOpen}
            onClose={setOpen}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
            sx={{
                border: 'none',
                outline: 'none',
                '& .MuiBackdrop-root': {
                    backgroundColor: 'rgba(0,0,0,0.3)'
                },
            }}
            onClick={(e) => {
                e.stopPropagation()
            }}
        >
            <Box sx={{
                bgcolor: '#FFF',
                position: 'fixed',
                top: '50%',
                left: '50%',
                right: '0',
                transform: 'translate(-50%, -50%)',
                borderRadius: '20px',
                width: '280px',
                padding: '24px 20px',
                boxSizing: 'border-box',
                border: 'none',
                outline: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'

            }}
                 onClick={(e) => e.stopPropagation()}>
                {children}
            </Box>
        </Modal>
    )
}

export default MainCustomModal