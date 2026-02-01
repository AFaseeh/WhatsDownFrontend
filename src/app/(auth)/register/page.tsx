"use client"
import RegisterForm from "@/components/Auth/RegisterForm"
import useTheme from "next-theme"
import Button from "@/components/FormFields/Button";
export default function registerPage()
{
    const {theme , setTheme} = useTheme();
    return (
    <div className="flex h-full flex-col items-center justify-center">
        <RegisterForm>
        </RegisterForm>
        <Button label="Toggle Theme"type="button" onClick={()=> 
        {
            setTheme(theme === "blue" ? "light" : "blue") 
            console.log("theme changed on register page");
        }}></Button>
    </div>
    )
}