import { ReactNode } from 'react'

export default interface KPopoverProps {
  children?: ReactNode
  anchorEl: Element | null
  setAnchorEl: (element: Element | null) => void
}
