import React from 'react'
import SingleToDo from './TaskListLayout/SingleToDo'


export default function  TaskListLayout({tododata}) {
  return (
    <div >
      {tododata.map((val,key) =>{
        return (
          <div key={key} style={{margin:'20px 0px'}}>
            <SingleToDo title={val.title} iscompeleted={val.iscompleted} />
          </div>
        )
      })}
        
    </div>
  )
}
