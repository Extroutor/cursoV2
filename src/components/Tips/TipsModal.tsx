import {Modal} from "@mui/material";
import React from "react";

export const TipsModal = ({children, isOpen, setOpen}: { children: any, isOpen: boolean, setOpen: any }) => {
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
          backgroundColor: '#181818E5'
        },
      }}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      {children}
    </Modal>
  )
}