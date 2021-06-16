import React, { useContext, useState } from 'react'
import { Context } from './ContextApi'



export default function App() {

  const { info, dispatch } = useContext(Context)
  const [state, setState] = useState(
    {
      name: "",
      email: "",
      phrase: ""
    }
  )

  const submit = (e) => {

    e.preventDefault()
    console.log(state)
    dispatch({ type: "ADD_INFO", payload: state})
  }

  console.log(state)
  return (
    <>
      <form onSubmit={submit}>
        <input placeholder="Name" onChange={(e) => setState({...state, name: e.target.value })}></input>
        <input placeholder="Email" onChange={(e) => setState({...state, email: e.target.value })}></input>
        <input placeholder="Phrase" onChange={(e) => setState({...state, phrase: e.target.value })}></input>
        <input type="submit" value="Submit"></input>
      </form>
      {/* <button onClick={() => dispatch({
        type: "ADD_INFO", payload: {
          name: "So", email: "kit@gmail"
          , phrase: "Student"}})}>add</button> */}
      {info.map((info, index) => {
        return (
          <div key={index}>
            <p>{info.name}</p>
            <p>{info.email}</p>
            <p>{info.company.catchPhrase}</p>
            <button onClick={() => dispatch({ type: "DELETE_INFO", payload: info.id })}>delete</button>
          </div>
        )
      })}
    </>
  )
}

