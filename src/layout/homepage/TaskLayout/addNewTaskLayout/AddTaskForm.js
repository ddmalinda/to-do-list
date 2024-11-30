import React from 'react'
import InputBox from '../../../../components/addTaskForm/InputBox'
import Button from '../../../../components/addTaskForm/Button'

export default function AddTaskForm() {
  return (
    <div>
        <InputBox/>
       <div style={{display:'flex',justifyContent:'flex-end',margin:'15px'} }>
       <Button/>
       </div>
    </div>
  )
}
