import AuthProvider from "./AuthContext"
import ThemeProvider from "./ThemeContext"
export default function Providers({children}:{children:React.ReactNode})
{
    return (
        <AuthProvider> 
            <ThemeProvider>
                {children} 
            </ThemeProvider>
         </AuthProvider>
    )
}