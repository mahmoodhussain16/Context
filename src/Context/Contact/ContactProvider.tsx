import {  useState } from "react";
import { ContactContext } from "./contactContext";


const initialState = [
    { id: 1, name: 'Ali', email: 'ali@email.com' },
    { id: 2, name: 'Sara', email: 'sara@email.com' },
    { id: 3, name: 'John', email: 'john@email.com' },
    { id: 4, name: 'Mike', email: 'mke@email.com' },
  ]
  
  interface ContactType{
    id:number
    name:string
    email:string
}
const ContactProvider=({children}:{children:React.ReactNode})=>{
    const [ContactList,setContactList]=useState(initialState)
const addContact =(contact:any)=>{
    setContactList([...ContactList,contact])
}
    
    return (
<ContactContext.Provider value={{ContactList,addContact}}>
    {children}

</ContactContext.Provider>
    )
}

export default ContactProvider