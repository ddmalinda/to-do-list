import React from 'react'
import AddNewTaskLayout from './homepage/AddNewTaskLayout'
import TaskLayout from './homepage/TaskLayout'
import TopNavigationLayout from './common/TopNavigationLayout'
import BoxShadowWrapper from './common/BoxShadowWrapper';

export default function HomePage() {
  return (
    <div style={{paddingBottom:'50px'}}>
      <TopNavigationLayout/>
      <div style={{padding:'0px 20px'}}>
        <div style={{margin:'20px 0px'}}>
          <BoxShadowWrapper>
          <TaskLayout/>
          </BoxShadowWrapper>
       
        </div>
        <BoxShadowWrapper>
        <AddNewTaskLayout/>
        </BoxShadowWrapper>
        
      </div>
    </div>
  );
    
}
