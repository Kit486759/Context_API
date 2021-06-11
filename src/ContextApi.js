import React, { createContext, useState, useReducer } from 'react';

const Context = createContext();

const infoReducer = (state, action) => {
    switch (action.type) {
        case "DELETE_INFO":
            return state.filter((info) => info.id !== action.payload)
        case "ADD_INFO":
            return [...state, {
                name: action.payload.name,
                address: action.payload.address,
                gender: action.payload.gender}]
        default:
            return state
    }
}

function ContextProvider({ children }) {


    const [info, dispatch] = useReducer(infoReducer,
        [
            {
                name: "Kit",
                address: "Vancouver",
                gender: "Male",
                id: 0
            },
            {
                name: "Taichi",
                address: "Vancouver",
                gender: "Male",
                id: 1
            },
            {
                name: "Miyabi",
                address: "Vancouver",
                gender: "Female",
                id: 2
            }
        ])



    return (
        <Context.Provider value={{ info, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider as default }



// {
//     name: "Kit",
//     address: "Vancouver",
//     gender: "Male",
//     id: 0
// },
// {
//     name: "Taichi",
//     address: "Vancouver",
//     gender: "Male",
//     id: 1
// },
// {
//     name: "Miyabi",
//     address: "Vancouver",
//     gender: "Female",
//     id: 2
// }

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "DELETE":
//             return state.filter((info) =>
//                 info.id !== action.payload.id
//             )
//         default: return state
//     }
// }