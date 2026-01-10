import './App.css'
import React, { useState } from 'react'

function App(){

  const[inputs, setInputs] = useState<{'firstName'?:string; 'lastName'?: string, 'age'?:number, 'agreed'?:boolean}>({})

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const name = e.target.name
    if(name === 'age'){
      const value = Number(e.target.value)
      setInputs((prev)=>({...prev,[name]:value}))
    } else if(name ==='agreed'){
      const value = e.target.checked
      setInputs((prev)=>({...prev,[name]:value}))
    } else{
      const value = e.target.value
      setInputs((prev)=>({...prev,[name]:value}))
    }
  }
  const clear = (field:'firstName'|'lastName'|'age'|'agreed')=>{
    setInputs((prev)=>{
      if(field==='age') return {...prev,[field]:undefined}
      if(field==='agreed') return {...prev,[field]:false}
      return {...prev,[field]:''}
    })
  }
}

export default App
