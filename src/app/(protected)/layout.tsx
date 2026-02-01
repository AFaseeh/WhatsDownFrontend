"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function homelayout({children}:{children:React.ReactNode})
{
    const router = useRouter();
    const {isAuthenticated} = useAuth();
    useEffect(()=>{
        if(!isAuthenticated)
            router.replace("/login");
    },[isAuthenticated]);
    return (
    <div className="flex h-screen overflow-hidden">
        {children}
    </div>
    )
}