import React from 'react'

export default function CheckboxInput({iscompeleted}) {
  return (
    <div>
        <input type='checkbox' checked={iscompeleted}/>
    </div>
  )
}
