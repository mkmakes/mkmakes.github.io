import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import { ModeToggle } from '@/components/ui/mode-toggle'

import './globals.css'

const metadata: Metadata = {
  title: 'mk codes',
  description: 'mk codes, mk makes, mk builds',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className='relative antialiased'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggle className='fixed right-6 bottom-6' />
          <div
            className={`
              m-auto prose px-8 py-40 prose-stone
              dark:prose-invert
            `}
          >
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export { metadata }
export default RootLayout
