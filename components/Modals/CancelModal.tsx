import {Box} from "@mui/material";
import MainCustomModal from "./MainCustomModal.tsx";

const CancelModal = ({isOpen, setOpen, counterparty}: {isOpen: boolean, setOpen: any, counterparty: string}) => {
    return (
        <MainCustomModal isOpen={isOpen} setOpen={setOpen}>
            <Box lineHeight='18.75px'>Stop the stream</Box>
            <span style={{
                color: '#8F8F8F',
                textAlign: 'center',
                marginTop: '12px',
                fontSize: '14px',
                lineHeight: '16.41px',

            }}>Do you want to stop the outgoing stream to {counterparty}?
                </span>
            <span style={{
                color: '#8F8F8F',
                textAlign: 'center',
                marginTop: '16px',
                fontSize: '14px',
                lineHeight: '16.41px',
            }}>The remaining funds will be refunded to your wallet balance.
                    This action will be irreversible.
                </span>
            <Box sx={{
                bgcolor: '#FF847E',
                borderRadius: '100px',
                color: '#FFFFFF',
                padding: '10px 24px',
                width: '100%',
                boxSizing: 'border-box',
                textAlign: 'center',
                mt: '30px',
                lineHeight: '18.75px'
            }}>
                Stop
            </Box>
            <span style={{
                color: '#8F8F8F',
                fontSize: '14px',
                marginTop: '18px',
                lineHeight: '16.41px',
                marginBottom: '2px'
            }}
            onClick={setOpen}
            >Cancel</span>
        </MainCustomModal>
    )
}

export default CancelModal