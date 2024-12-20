import React from 'react'

export default function InputBox() {  
  return (
    <input placeholder="ADD NEW TASK" onChange={(e)=>{this.setState({newTask:e.taget.value,});}} type='text' style={{width:'100%',border:'none',borderBottom:'1px solid gray'}}/>
  );
}
