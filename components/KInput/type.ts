import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute, ReactNode } from 'react'

export default interface KInputProps {
  className?: string
  direction?: 'rtl' | 'ltr'
  id?: string
  name?: string
  width?: number
  fullWidth?: boolean
  variant?: 'outlined' | 'filled'
  type?: HTMLInputTypeAttribute
  label?: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onPressEnter?: () => void
  rightIcon?: (className: string) => ReactNode
  leftIcon?: (className: string) => ReactNode
  error?: boolean
  helperIcon?: (className: string) => ReactNode
  helperText?: ReactNode
  disabled?: boolean
  placeholder?: string
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
  autoFocus?: boolean
  rows?: number
}
