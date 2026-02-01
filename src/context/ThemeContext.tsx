"use client"

import { ThemeProvider as NextThemeProvider } from "next-theme"

export default function ThemeProvider({children}:{children : React.ReactNode})
{
    return (
    <NextThemeProvider 
    defaultTheme="system" 
    attribute="class"
    themes={["red","blue","dark","light"]}
    >
        {children}
    </NextThemeProvider>
    )
}