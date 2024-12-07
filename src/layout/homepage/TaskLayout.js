import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'
import TaskListLayout from './TaskLayout/TaskListLayout'

export default function TaskLayout({title,tododata}) {
  return (
    <div>
       <SectionTitle title={title}/> 
       <div style={{marginTop:'30px'}}>
       <TaskListLayout tododata={tododata}/>
       </div>
    </div>
  )
}
