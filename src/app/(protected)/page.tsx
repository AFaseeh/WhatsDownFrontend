"use client"
import useTheme from "next-theme"
import Button from "@/components/FormFields/Button";
import ChatList from "@/components/Layout/ChatList";
export default function HomePage()
{
    const {theme , setTheme} = useTheme();
    return (
        <ChatList />
    )
}