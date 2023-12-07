import { z } from "zod";


// creating an object schema
export const signUpSchema = z.object({
    username: z
    .string({required_error: "Name is required"}).trim()
    .min(3, {message : "Name must have at least 3 characters"})
    .max(255, {message : "Name must not have more than 255 characters"}),

    email: z
    .string({required_error: "Email is required"}).trim()
    .min(3, {message : "email must have at least 3 characters"})
    .max(255, {message : "email must not have more than 255 characters"}),

    phone: z
    .string({required_error: "phone is required"}).trim()
    .min(3, {message : "phone must have at least 10 characters"})
    .max(20, {message : "phone must not have more than 255 characters"}),

    password: z
    .string({required_error: "Password is required"}).trim()
    .min(3, {message : "password must have at least 6 characters"})
    .max(255, {message : "password cannot have more than 255 characters"}),
})