import React, { createContext, useState, useReducer, useEffect } from 'react';

const Context = createContext();

const infoReducer = (state, action) => {
    switch (action.type) {

        case "FETCH_INFO":
            return [...state, action.payload]
        case "DELETE_INFO":
            return state.filter((info) => info.id !== action.payload)
        case "ADD_INFO":
            return [ {
                name: action.payload.name,
                email: action.payload.email,
                company : {catchPhrase: action.payload.phrase}
               
            } , ...state]
        default:
            return action.payload
    }
}

function ContextProvider({ children }) {

    // const [data,setData] =useState([])
    const [info, dispatch] = useReducer(infoReducer, [])

    const fetching = async () => {
        try {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(res => {
                    if (res.status !== 200) {
                        console.log(`There are issues${res.status}`)
                    } return res.json()
                }).then(data => {
                    console.log(data)
                    dispatch({ type: "default", payload: data })
                })

        }
        catch (err) {
            console.log(`There are error${err}`)
        }
    }

    useEffect(() => {
        fetching()

    }, [])


    console.log(info)


    return (
        <>
            {info.length !== 0 && (

                <Context.Provider value={{ info, dispatch }}>
                    {children}
                </Context.Provider>

            )}
        </>
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