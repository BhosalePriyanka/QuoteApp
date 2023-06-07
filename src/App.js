import { useEffect, useState } from 'react';
import './App.css';

function App() {
const[state,setState] = useState('')

const apiFetch =  async() =>{
 
const response = await fetch('https://type.fit/api/quotes')
const data = await response.json()
console.log(data)
//Math.random() used with Math.floor() can be used to return random integers.
let randomNUmber = Math.floor(Math.random()* data.length)
setState(data[randomNUmber])
}
  useEffect(()=>{ 
    apiFetch()
  },[])

 
  return (
    <div id="container" style={{height:"100vh",position:'relative', backgroundColor:"pink"}}>
    <div id="quote-box" style={{left:"50%", top:"50%", transform:"translate(-50%,-50%)", border: "1px solid black", padding: "10px",  position:"absolute" }}>
    <>
     <div id="text">{state.text}</div>
     <div id="author">{state.author}</div>
     </>

     <button id="new-quote" onClick={apiFetch}> New Quote</button>
     <button id="tweet-quote"><a href='twitter.com/intent/tweet'> Twiter</a> </button>
    </div>
    </div>
  );
}

export default App;
