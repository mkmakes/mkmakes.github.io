import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import './globals.css'

export const metadata: Metadata = {
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
      <body
        className={`
          m-auto prose py-40 antialiased prose-stone
          dark:prose-invert
        `}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
