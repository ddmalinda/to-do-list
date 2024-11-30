import React from 'react'
import SectionTitle from '../../components/common/SectionTitle'
import AddTaskForm from './TaskLayout/addNewTaskLayout/AddTaskForm';

export default function AddNewTaskLayout() {
  return (
    <div>
      <SectionTitle title={'New Task'}/>
      <AddTaskForm/>
    </div>
  );
}
