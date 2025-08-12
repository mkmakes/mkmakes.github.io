import * as React from 'react'
import type { ComponentProps } from 'react'

const GradientHeader = ({ children, ...props }: ComponentProps<'h1'>) => {
  return (
    <h1
      className={`
        bg-gradient-to-r from-green-500 via-blue-500 to-violet-500 bg-clip-text
        text-transparent!
      `}
      {...props}
    >
      {children}
    </h1>
  )
}

export { GradientHeader }
