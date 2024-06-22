import { Popover } from '@mui/material'
import KPopoverProps from './type'

function KPopover({ children, anchorEl, setAnchorEl }: KPopoverProps) {
  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: '0px 2px 4px 0px #00000029',
          overflow: 'hidden',
          borderRadius: 16,
        },
      }}
    >
      <div className="bg-grayscale-surface-subtle rounded-2xl ">{children}</div>
    </Popover>
  )
}

export default KPopover
