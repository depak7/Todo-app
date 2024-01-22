import { useState } from 'react'
import { Createtodo } from './components/Createtodo'
 import { Todos } from './components/Todos'


function App() {
  const [todos, settodos] = useState([])

  fetch("http://localhost:3000/todos")
   .then(async function(res) {
      const json = await res.json();
      console.log(json);
     settodos(json);
    })


  return (
   
      <div>
        <Createtodo></Createtodo>
        <Todos todos={todos}></Todos>

      </div>
 
  )
}

export default App
