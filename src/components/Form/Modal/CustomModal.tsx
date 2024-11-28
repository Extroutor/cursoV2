import {Modal} from '@mui/material'

interface Props {
    openModal: boolean,
    handleModalClose: () => void,
    children: any,
}

const CustomModal = ({children, openModal, handleModalClose}: Props) => {
    return (
        <Modal
            open={openModal}
            onClose={handleModalClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'

            sx={{
                bgc: '#00000033',
                border: 'none',
                outline: 'none',
            }}

        >
            {children}
        </Modal>
    );
};

export default CustomModal;