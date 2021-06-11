import React, { useContext } from 'react'
import { Context } from './ContextApi'



export default function App() {
  // const { dispatch } = useContext(Context)


  return (
    <Context.Consumer>
      
      {(value) => (
      <>
      <button onClick={() => value.dispatch({ type: "ADD_INFO", payload: {name:"So",address:"Vancouver",gender:"Male" }})}>add</button>
      
      {value.info.map((info, index) =>
        <div key={index}>
          <p>{info.name}</p>
          <p>{info.address}</p>
          <p>{info.gender}</p>
          <p>{info.test}</p>
          <button onClick={() => value.dispatch({ type: "DELETE_INFO", payload: info.id })}>delete</button>
        </div>

      )}
      </>
      )}
    </Context.Consumer >

  )



}

