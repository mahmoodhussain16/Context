import {  useState } from "react";
import { ThemeContext } from "@emotion/react";

const ThemeProvider=({children}:{children:React.ReactNode})=>{
    const [currentTheme,setCurrentTheme]=useState("light")

    return (
<ThemeContext.Provider value={{currentTheme}}>
    {children}
</ThemeContext.Provider>
    )
}

export default ThemeProvider