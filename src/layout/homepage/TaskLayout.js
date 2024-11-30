import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'
import TaskListLayout from './TaskLayout/TaskListLayout'

export default function TaskLayout() {
  return (
    <div>
       <SectionTitle title={'Task'}/> 
       <div style={{marginTop:'30px'}}>
       <TaskListLayout/>
       </div>
    </div>
  )
}
