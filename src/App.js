import React, { useContext } from 'react'
import { Context } from './ContextApi'
import Info from './Info';


export default function App() {
const {dispatch} = useContext(Context)
const clickDel = () =>{
  // dispatch()
}

  return (
    <Context.Consumer>
    
      {(value) => value.info.map((info, index) =>

        <div key={index}>
          <p>{info.name}</p>
          <p>{info.address}</p>
          <p>{info.gender}</p>
          <p>{info.test}</p>
          <button onClick={()=>dispatch({type:"DELETE_INFO",payload:info.id})}>delete</button>
        </div>

      )}
    </Context.Consumer >

  )



}

