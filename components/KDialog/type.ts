import { ReactNode } from 'react'

export default interface KDialogProps {
  open: boolean
  handleClose?: () => void
  children?: ReactNode
  width?: number | string
  height?: number | string
}
