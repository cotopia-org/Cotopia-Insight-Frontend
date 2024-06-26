'use client'

import { forwardRef } from 'react'
import { TextField, InputLabel } from '@mui/material'
import ThemeProvider from '../ThemeProvider'
import KInputProps from './type'

const KInput = forwardRef<HTMLInputElement, KInputProps>(
  (
    {
      className,
      direction = 'ltr',
      id,
      name,
      width,
      fullWidth,
      variant = 'outlined',
      type,
      label,
      value,
      onChange,
      onPressEnter,
      rightIcon,
      leftIcon,
      error,
      helperText,
      disabled,
      placeholder,
      onBlur,
      onFocus,
      autoFocus,
      rows,
    },
    ref,
  ) => {
    return (
      <ThemeProvider>
        <div className={className}>
          {label ? (
            <InputLabel className="!text-medium16 !text-grayscale-text-subtitle mb-2">
              {label}
            </InputLabel>
          ) : null}
          <TextField
            multiline={!!rows}
            rows={rows}
            variant={variant}
            id={id}
            name={name}
            sx={{
              width,
            }}
            fullWidth={fullWidth}
            type={type}
            value={value}
            onChange={onChange}
            onKeyDown={e => {
              if (e.key === 'Enter' && onPressEnter) {
                onPressEnter()
                e.preventDefault()
              }
            }}
            error={error}
            helperText={helperText}
            disabled={disabled}
            placeholder={placeholder}
            onBlur={onBlur}
            onFocus={onFocus}
            autoFocus={autoFocus}
            inputRef={ref}
            InputProps={{
              disableUnderline: true,
              inputProps: {
                style: { direction },
              },
              startAdornment: leftIcon && leftIcon('w-5 h-5 mr-1 text-text-light'),
              endAdornment: rightIcon && rightIcon('w-5 h-5 ml-1 text-text-light'),
            }}
            FormHelperTextProps={{ className: '!text-regular14' }}
          />
        </div>
      </ThemeProvider>
    )
  },
)

export default KInput
