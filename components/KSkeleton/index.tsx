import { Skeleton } from '@mui/material'
import KSkeletonProps from './type'

function KSkeleton({ height, width, animationType, variant, className }: KSkeletonProps) {
  return (
    <Skeleton
      width={width}
      height={height}
      animation={animationType}
      variant={variant}
      className={className}
    />
  )
}

export default KSkeleton
