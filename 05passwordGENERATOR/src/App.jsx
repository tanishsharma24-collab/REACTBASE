import { useState , useCallback , useEffect , useRef} from 'react'
import "./index.css"
import './App.css'

function App() {

  let [length , setLength] = useState(8);
  let [numberAllowed , setNumberAllowed] = useState(false);
  let [charAllowed ,  setCharAllowed] = useState(false);
  let [password , setPassword] = useState("")
  //this is a pointer jo password ko point kar rha hai and suru mai null ko point kraga 
   const passwordRef = useRef(null)//return a obj pointer

  //generate random password and setPassword(optimization by useCallback hook)
  const passwordGenerater = useCallback(() => {

    let pass = "";
    let s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    if(numberAllowed) s += "0123456789"
    if(charAllowed) s += "~!@#$%^&*()_+-*/"

    for(let i = 1 ; i <= length ; i ++)
    {
      let idx = Math.floor(Math.random()*s.length);
      pass += s.charAt(idx);
    }

    setPassword(pass);
  } , [length , numberAllowed , charAllowed] )

  //useEffect hook ->jab bhi iski depandancy mai chang hoga ya call kar daga passwordgenerator ko
  useEffect(()=>
  {
    passwordGenerater();
  } , [length, numberAllowed, charAllowed, passwordGenerater])
   
  //copy button click hona par input password copy ho jyaga (user ko eff show krna ka liya useRef hook ka use kiya)
  const copyPasswordToClipboard = useCallback(()=>
  {
    passwordRef.current?.select();//passwordRef.current->current value of password
    passwordRef.current?.setSelectionRange(0, 100);//isi rang mai select kro
    window.navigator.clipboard.writeText(password)
  } , [password])


  return (
   
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-white-800 text-red-500">
      <h1 className='text-white text-center my-3'>Password</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}

            
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
  
  )
}

export default App
