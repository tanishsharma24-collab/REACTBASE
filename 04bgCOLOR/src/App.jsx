import { useState } from 'react'
import "./index.css"


function App() {
  const [color , setColor] = useState("black")

  return (
    <>
      <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>
         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl' >
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}} onClick={()=>setColor("red")} >red</button>
           <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "pink"}} onClick={()=>setColor("pink")}>pink</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}} onClick={()=>setColor("blue")}>blue</button>
           <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "gray"}} onClick={()=>setColor("gray")}>gray</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "yellow"}} onClick={()=>setColor("yellow")}>yellow</button>
         </div>
      </div>

    </>
  )
}

export default App
