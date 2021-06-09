import React, { createContext, useState } from 'react';

export const Context = createContext()

export default function ContextApi({children}) {

    const [info] = useState({
        name: "Kit",
        address: "Vancouver",
        gender: "Male"
    })

    

    return (
        <Context.Provider value={info}>
           {children}
        </Context.Provider>
    )
}

