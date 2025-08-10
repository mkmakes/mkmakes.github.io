import type { ButtonProps } from '@/components/ui/button'
import { Button } from '@/components/ui/button'

type IconButtonProps = ButtonProps & { srText: string }

const IconButton = ({ children, srText, ...props }: IconButtonProps) => {
  return (
    <Button
      variant='ghost'
      size='sm'
      {...props}
    >
      {children}
      <span className='sr-only'>{srText}</span>
    </Button>
  )
}

export type { IconButtonProps }
export { IconButton }
