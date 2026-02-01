import Providers from "@/context/Providers"
import "@/globals.css"
import IconBar from "@/components/Layout/IconBar"

export default function applayout({children}:{children:React.ReactNode})
{
    return(
    <html>
        <body>
            <Providers>
                <div className="flex h-screen overflow-hidden">
                    <IconBar />
                    <main className="flex-1 overflow-hidden">
                        {children}
                    </main>
                </div>
            </Providers>
        </body>
    </html>
    )
}