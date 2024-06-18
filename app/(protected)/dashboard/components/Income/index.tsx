import { useEffect, useState } from 'react'
import { DollarSquareBulkIcon, MoreLinearIcon } from '@assets'
import staticText from '@locale/en'
import { KInput, KSkeleton } from '@components'
import { useUserStore } from '@store'
import IncomeType from './type'

const { income, insert_income, based_on_income } = staticText.dashboard

function Income({ data, loading }: IncomeType) {
  const { incomePerHour, setIncomePerHour } = useUserStore()
  const [myIncome, setMyIncome] = useState(0)

  useEffect(() => {
    if (incomePerHour) setMyIncome(incomePerHour)
  }, [incomePerHour])

  return (
    <div className="h-[212px] flex flex-col gap-[28.5px] py-4 px-5 bg-secondary-surface-light rounded-3xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-bold20 text-secondary-text-link">
          <DollarSquareBulkIcon className="w-8 h-8 text-secondary-text-link" />
          {income}
        </div>
        <MoreLinearIcon
          className="w-6 h-6 text-grayscale-text-paragraph cursor-pointer"
          onClick={() => setIncomePerHour(0)}
        />
      </div>
      {loading || !data ? (
        <>
          <KSkeleton height={66.83} />
          <KSkeleton height={23.87} />
        </>
      ) : (
        <>
          {incomePerHour ? (
            <>
              <div className="text-regular56 text-grayscale-text-paragraph">
                ${((data / 3600) * incomePerHour).toFixed(2)}
              </div>
              <div className="text-medium20 text-grayscale-text-subtitle">
                {based_on_income(incomePerHour)}
              </div>
            </>
          ) : (
            <div className="mt-[25.5px]">
              <KInput
                autoFocus
                fullWidth
                type="number"
                label={insert_income}
                value={String(myIncome)}
                onChange={e => setMyIncome(Number(e.target.value))}
                onPressEnter={() => setIncomePerHour(myIncome)}
                leftIcon={className => <div className={`${className} text-[#6B7280]`}>$</div>}
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Income
