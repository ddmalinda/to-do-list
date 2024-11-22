import React from 'react'
import AddNewTaskLayout from './homepage/AddNewTaskLayout'
import TaskLayout from './homepage/TaskLayout'
import TopNavigationLayout from './common/TopNavigationLayout'

export default function HomePage() {
  return (
    <div>
        <TopNavigationLayout/>
        <TaskLayout/>
        <AddNewTaskLayout/>
        
    </div>
  );
    
}
