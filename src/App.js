import React from 'react';
import './App.css';
import { Todo } from './Component/Todo';
import { Todolist } from './Component/Todolist';

function App() {
  const [todo, settodo]= React.useState([])

    

  const todoinput=(str)=>{
    settodo([...todo ,{ id: Date.now(), iscomplate: false, fevrate: false, value: str }])
  }

  const markascomplate =(id,statas)=>{
    todo.map((element)=>{
      if(element.id===id){
        element.iscomplate=statas;
        
      }
      return 0;
    })
    settodo(todo)
  }

  const markasfev =(id)=>{
    todo.map((element)=>{
      if(element.id===id){
        if(element.fevrate===true){
          element.fevrate=false;
        }else{
          element.fevrate=true;
        }
      }
      return 0;
    })
    settodo(todo)
  }

  return (
    <div className="App">
      <Todo  todoin={todoinput} />
      <Todolist todos={todo} markascomplate={markascomplate} markasfev={markasfev}/>
    </div>
  );
}

export default App;