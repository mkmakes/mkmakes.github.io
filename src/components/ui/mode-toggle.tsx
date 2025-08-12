'use client'

import * as React from 'react'
import type { ComponentProps } from 'react'
import { Laptop, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { IconButton } from '@/components/ui/button/icon-button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useMounted } from '@/components/hooks/use-mounted'

const ModeToggle = ({ ...props }: ComponentProps<'div'>) => {
  const { theme, setTheme } = useTheme()
  const { isMounted } = useMounted()

  return (
    <div {...props}>
      {isMounted && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <IconButton srText='Toggle theme'>
              {theme === 'system' ? (
                <Laptop />
              ) : theme === 'dark' ? (
                <Moon />
              ) : (
                <Sun />
              )}
            </IconButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem onClick={() => setTheme('light')}>
              <Sun />
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              <Moon />
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              <Laptop />
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )
}

export { ModeToggle }
