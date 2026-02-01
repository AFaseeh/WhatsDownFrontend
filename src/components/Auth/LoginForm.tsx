"use client"
import {loginSchema,loginData} from "@/lib/auth"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import InputField from "../FormFields/InputField"
import Button from "../FormFields/Button"
import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"
export default function LoginForm()
{
    const {login} = useAuth();
    const {register, handleSubmit, formState} =useForm<loginData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email:"",
            password:""
        },
        mode:"onSubmit",
        reValidateMode: "onSubmit"
    });
    const onSubmit = async (data: loginData) => {
        try
        {
            login(data.email,data.password);
        }
        catch (err)
        {
            console.log("Login Request Failed");
            console.log(err);
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 shadow-lg p-3 justify-center rounded-lg my-4 mx-4 bg-secondaryBg/60 ">
            <h1 className="text-primary py-1 px-1"> Log in to Your Whatsdown Account</h1>
            <InputField fieldname= "email" type="email" label ="Email" register={register}></InputField>
            <InputField fieldname= "password" type="password" label ="Password" register={register}></InputField>
            <div className="flex w-full pt-1 px-4 mb-1 mx-auto justify-center">
                <div className="flex text-sm text-primary py-1 justify-center">
                    <Link href="/register/" target="_blank" className="justify-center">Don't Have an Account? Sign Up Here</Link> 
                </div>
            </div>
            <span className="text-primary">{formState.errors.email? formState.errors.email.message : " " }</span>
            <span className="text-primary">{formState.errors.password? formState.errors.password.message : " " }</span>
            <Button label = "Login"></Button>
        </form>
    )
}