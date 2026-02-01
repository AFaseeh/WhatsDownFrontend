import { createContext } from "react";
import z from "zod"

export const userSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(2,"Name must be at least 2 Characters"),
    profileImageURL: z.url().optional()
})
export type User = z.infer<typeof userSchema>;

export const loginSchema = z.object({
    email: z.email("Invalid Email Address"),
    password: z.string().min(5,"Invalid Password")
    .refine((val) => /[A-Z]/.test(val) && /[0-9]/.test(val) && /[!@#$%^&*(),.?":{}|<>]/.test(val),
    { message: "Invalid Password" })

});
export type loginData = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
    username: z.string().min(2,"Name must be at least 2 Characters"),
    email: z.email("Must be a Valid Email Address"),
    password: z.string().min(5,"Password is too short")
    .refine((val) => /[A-Z]/.test(val), { message: "Must include uppercase" })
    .refine((val) => /[0-9]/.test(val), { message: "Must include a number" })
    .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), { message: "Must include a symbol" }),
    confirmPassword: z.string()

}).refine((data) => data.password === data.confirmPassword,
 { message:"Passwords must match", path: ["confirmPassword"]});

export type registerData = z.infer<typeof registerSchema>;

export type AuthContextValue = {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string,password: string) => Promise<void>;
    logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue | null>(null);