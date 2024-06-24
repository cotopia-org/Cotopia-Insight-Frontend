import { FormLabel, Radio } from '@mui/material'
import classNames from 'classnames'
import ThemeProvider from '../ThemeProvider'
import { KRadioProps } from './type'

function KRadio({ className, label, checked, onClick, disabled }: KRadioProps) {
  return (
    <ThemeProvider>
      <FormLabel className={classNames('flex items-center', className)}>
        <Radio
          checked={checked}
          onChange={e => (onClick ? onClick(e.target.checked) : null)}
          disabled={disabled}
          icon={
            <div
              className={classNames(
                'w-3 h-3 flex justify-center items-center border border-primary-text-display rounded-full',
                { 'bg-grayscale-border-disabled': disabled },
              )}
            >
              <div
                className={classNames(
                  'w-[7px] h-[7px] rounded-full border border-primary-text-display',
                  {
                    '!bg-border-middle': disabled,
                  },
                )}
              />
            </div>
          }
          checkedIcon={
            <div
              className={classNames(
                'w-3 h-3 flex justify-center items-center border border-primary-text-display rounded-full',
                {
                  '!border-grayscale-border-disabled': disabled,
                },
              )}
            >
              <div
                className={classNames('w-[7px] h-[7px] rounded-full bg-primary-text-display', {
                  '!bg-border-middle': disabled,
                })}
              />
            </div>
          }
        />
        {label && <div className="text-grayscale-text-paragraph text-medium14 ml-2">{label}</div>}
      </FormLabel>
    </ThemeProvider>
  )
}

export default KRadio
