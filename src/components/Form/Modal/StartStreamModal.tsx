import CustomModal from "./CustomModal.tsx";
import {Box} from "@mui/material";
import {ClipLoader} from "react-spinners";
import {SubtitleTypography} from "../../Typography/SubtitleTypography.tsx";

interface Props {
    openModal: boolean,
    handleModalClose: () => void,
}

const StartStreamModal = ({openModal, handleModalClose}: Props) => {

    return (
        <CustomModal openModal={openModal} handleModalClose={handleModalClose}>

            <Box sx={{
                bgcolor: '#FFF',
                position: 'fixed',
                bottom: '0',
                borderRadius: '20px 20px 0px 0px',
                width: '100%',
                padding: '0 20px',
                boxSizing: 'border-box',
                border: 'none',
                outline: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Box sx={{
                    padding: '32px',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <ClipLoader size={34} speedMultiplier={0.5} color='#56AAC8' cssOverride={{
                        borderWidth: '3.5px'
                    }}/>
                </Box>
                <SubtitleTypography>Hang on, your wallet app is about to open</SubtitleTypography>
                <Box sx={{
                    color: '#8F8F8F',
                    fontSize: '14px',
                    mt: '8px',
                    lineHeight: '16.41px'
                }}>It might take a few seconds. You&#39;ll need to confirm the transaction twice — that&#39;s just how the
                    system works to make sure everything goes smoothly.</Box>

                <Box
                    sx={{
                        bgcolor: '#E5E5E5',
                        fontWeight: '500',
                        fontSize: '16px',
                        lineHeight: '18.75px',
                        textAlign: 'center',
                        borderRadius: '100px',
                        padding: '10px 24px',
                        width: '100%',
                        boxSizing: 'border-box',
                        margin: '20px 0',
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        // field.onChange(value)
                        handleModalClose()
                    }}
                >
                    Cancel
                </Box>
            </Box>
        </CustomModal>
    )
}

export default StartStreamModal