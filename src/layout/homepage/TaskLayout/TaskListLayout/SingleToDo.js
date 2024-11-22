import React from 'react'
import ToDOoTitle from '../../../../components/singletodo/ToDOoTitle'
import CheckboxInput from '../../../../components/singletodo/CheckboxInput'
import Deleticon from '../../../../components/singletodo/Deleticon'

export default function SingleToDo() {
  return (
    <div style={{display:'flex', gap:'10px'}}>
        <CheckboxInput/>
        <ToDOoTitle/>
        <Deleticon/>
    </div>
  );  
}
 