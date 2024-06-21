'use client'

import { Dialog } from '@mui/material'
import KDialogProps from './type'

function KDialog({ open, handleClose, children, width = '85%', height = '75%' }: KDialogProps) {
  return (
    <Dialog
      maxWidth={false}
      onClose={handleClose}
      open={open}
      PaperProps={{ style: { borderRadius: 24, height, width } }}
    >
      {children}
    </Dialog>
  )
}

export default KDialog
