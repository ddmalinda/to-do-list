import React from 'react'
import ToDOoTitle from '../../../../components/singletodo/ToDOoTitle'
import CheckboxInput from '../../../../components/singletodo/CheckboxInput'
import Deleticon from '../../../../components/singletodo/Deleticon'

export default function SingleToDo({title,iscompeleted}) {
  return (
    <div style ={{
      display:'flex',
      justifyContent:'space-between', 
    }}>
       <div style={{display:'flex', gap:'10px'}}>
        <CheckboxInput iscompeleted={iscompeleted}/>
        <ToDOoTitle title={title} />
       </div>
        <Deleticon/>
    </div>
  );  
}
 