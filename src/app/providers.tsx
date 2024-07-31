// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { AppProvider } from "@/context/AppContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return(
    <AppProvider>
      <ChakraProvider>
      {children}
      </ChakraProvider>
    </AppProvider>
  ) 
}