import { createContext } from "react";


interface ContactType{
    id:number
    name:string
    email:string
}


export const ContactContext =createContext<any>(null)

