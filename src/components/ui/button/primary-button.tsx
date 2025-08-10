import type { ButtonProps } from '@/components/ui/button'
import { Button } from '@/components/ui/button'

const PrimaryButton = ({ ...props }: ButtonProps) => {
  return <Button {...props} />
}

export { PrimaryButton }
