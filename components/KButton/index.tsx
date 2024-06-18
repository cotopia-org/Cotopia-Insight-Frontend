'use client'

import { MouseEventHandler, useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import classnames from 'classnames'
import Lottie from 'lottie-react'
import ThemeProvider from '../ThemeProvider'
import LoadingLottie from './loading.json'
import KButtonProps from './type'

function KButton({
  text,
  width,
  variant = 'contained',
  color = 'primary',
  size = 'small',
  typography = 'medium12',
  fullWidth = false,
  disabled = false,
  leftIcon,
  rightIcon,
  onClick,
  htmlType = 'button',
  loading,
  className,
  LinkComponent,
  href,
}: KButtonProps) {
  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
    if (!loading && onClick) {
      onClick(e)
    }
  }

  return (
    <ThemeProvider>
      <Button
        className={classnames([className, 'flex items-center justify-center gap-2'])}
        variant={hovered && variant === 'outlined' ? 'contained' : variant}
        fullWidth={fullWidth}
        sx={{
          width,
          paddingX: 1,
          paddingY: 0,
          boxShadow: 'none',
        }}
        color={color}
        size={size}
        startIcon={rightIcon && !loading ? rightIcon(classnames('w-5 h-5')) : null}
        endIcon={leftIcon && !loading ? leftIcon(classnames('w-5 h-5')) : null}
        type={htmlType}
        disabled={disabled}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        LinkComponent={LinkComponent}
        href={href}
        disableRipple
      >
        {loading ? (
          <Lottie loop animationData={LoadingLottie} className="w-8 h-8" />
        ) : (
          <Typography variant={typography}>{text}</Typography>
        )}
      </Button>
    </ThemeProvider>
  )
}

export default KButton
