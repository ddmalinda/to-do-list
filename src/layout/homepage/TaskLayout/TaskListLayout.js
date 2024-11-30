import React from 'react'
import SingleToDo from './TaskListLayout/SingleToDo'

const  todoData=['wash the car','Dothe dishes'];
export default function  TaskListLayout() {
  return (
    <div >
      {todoData.map((val,key) =>{
        return (
          <div key={key} style={{margin:'20px 0px'}}>
            <SingleToDo title={val}/>
          </div>
        )
      })}
        
    </div>
  )
}
