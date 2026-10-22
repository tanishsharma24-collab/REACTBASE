import { useState } from 'react'
import './index.css'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  let obj = {
    name : "tanish",
    rollno : 50
  }
   let obj2 = {
    name : "rahul",
    rollno : 50
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">props with tallwind</h1>
      < Card info={obj} city="jaipur"/>

       < Card info={obj2} city="mumbia" />
     
     

    </>
  )
}

export default App
