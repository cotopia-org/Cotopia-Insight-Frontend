import { ElementType, MouseEventHandler, ReactNode } from 'react'

export type KButtonColors = 'primary'
export type KButtonVariants = 'contained' | 'outlined' | 'text'
export type KButtonSizes = 'large' | 'small'
export type KButtonTypography =
  | 'medium64'
  | 'regular64'
  | 'medium56'
  | 'regular56'
  | 'medium48'
  | 'medium32'
  | 'bold24'
  | 'medium24'
  | 'regular24'
  | 'bold20'
  | 'medium20'
  | 'regular20'
  | 'light20'
  | 'bold18'
  | 'medium18'
  | 'regular18'
  | 'light18'
  | 'bold16'
  | 'medium16'
  | 'regular16'
  | 'light16'
  | 'bold14'
  | 'medium14'
  | 'regular14'
  | 'light14'
  | 'bold12'
  | 'medium12'
  | 'regular12'
  | 'light12'
  | 'bold10'
  | 'medium10'
  | 'regular10'
  | 'light10'
  | 'medium9'

export default interface KButtonProps {
  text: string
  width?: number
  typography?: KButtonTypography
  fullWidth?: boolean
  variant?: KButtonVariants
  color?: KButtonColors
  size?: KButtonSizes
  disabled?: boolean
  leftIcon?: (className: string) => ReactNode
  rightIcon?: (className: string) => ReactNode
  htmlType?: 'button' | 'reset' | 'submit'
  loading?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  LinkComponent?: ElementType<any>
  href?: string
}
