import { usePathname, useRouter } from 'next/navigation'
import classNames from 'classnames'
import MenuItemProps from './type'

function MenuItem({ title, path, linearIcon, boldIcon }: MenuItemProps) {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div
      role="presentation"
      className={classNames(
        'flex gap-3 items-center text-bold16 mb-6 px-4 py-2 rounded cursor-pointer hover:bg-grayscale-surface',
        {
          'text-grayscale-text-disabled': pathname !== path,
        },
        {
          'text-primary-text-link bg-grayscale-surface border-r-[3px]': pathname === path,
        },
      )}
      onClick={() => router.push(path)}
    >
      {pathname !== path ? linearIcon : boldIcon}
      {title}
    </div>
  )
}

export default MenuItem
