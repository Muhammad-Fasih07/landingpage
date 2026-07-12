'use client'

import { ThemeProvider } from 'next-themes'
import { HireMeProvider } from '@/components/ui/HireMeModal'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
    >
      <HireMeProvider>{children}</HireMeProvider>
    </ThemeProvider>
  )
}
