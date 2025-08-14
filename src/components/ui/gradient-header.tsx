import * as React from 'react'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

const GradientHeader = ({
  children,
  className,
  ...props
}: ComponentProps<'h1'>) => {
  return (
    <h1
      className={cn(
        `
          bg-gradient-to-r from-green-500 via-blue-500 to-violet-500
          bg-clip-text text-transparent!
        `,
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

export { GradientHeader }
