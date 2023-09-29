import React from 'react'
import { FaTrash } from "react-icons/fa";


const Lineitem = ({item,handlecheck,handledelete}) => {
  return (
    <li key={item.id}>
    <input type='checkbox'
    checked={item.checked}
    onChange={()=>handlecheck(item.id)}
    />
    <label onDoubleClick={()=>handlecheck(item.id)} 
   >{item.item}</label>
   <FaTrash 
   role='button'
   tabIndex="0"
   
   onClick={()=>handledelete(item.id)}
    
     />


    </li>
  )
}

export default Lineitem