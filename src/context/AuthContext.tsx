"use client";
import { useState } from "react";
import { AuthContext, AuthContextValue, User} from "@/lib/auth"


export default function AuthProvider({ children }: {children:React.ReactNode})
{
    const [user, setUser] = useState<User | null>(null);
    const login = async ( email: string, password:string) => {
        const response = await fetch("http://localhost:3001/login",{
            method:"POST",
            body: JSON.stringify({email,password})
        });
        const data = await response.json();
        if(!response.ok)
            throw new Error ("Login Failed");
        setUser(data.user);
    }
    const logout = async () =>{
        setUser(null);
    }
    const value: AuthContextValue = {
        user,
        isAuthenticated: !!user,
        login,
        logout
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}