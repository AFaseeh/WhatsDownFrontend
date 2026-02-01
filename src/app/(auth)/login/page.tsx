"use client"
import LoginForm from "@/components/Auth/LoginForm"
import useTheme from "next-theme"
import Button from "@/components/FormFields/Button";
export default function loginPage()
{
    const {theme , setTheme} = useTheme();
    return (
    <div className="flex h-full flex-col items-center justify-center">
        <LoginForm>
        </LoginForm>
        <Button label="Toggle Theme"type="button" onClick={()=> {setTheme(theme === "blue" ? "light" : "blue")}}></Button>
    </div>
    )
}