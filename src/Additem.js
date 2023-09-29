import React from 'react'
import { FaChessQueen } from "react-icons/fa6";
import { useRef } from 'react';

const Additem = ({newitem,setnewitem,handlesubmit}) => {
  var refrence = useRef();
  return (
    <form className='additem' onSubmit={(e)=>handlesubmit(e)}>
        <label htmlFor='additem'>Add Item</label>
        <input type='text'
        ref={refrence}
        autoFocus
        required
        id='txtbox'
        value={newitem}
        onChange={(e)=>setnewitem(e.target.value)}
        />
        <button type='submit'
        onClick={()=>refrence.current.focus()}
        ><FaChessQueen /></button>
    </form>
  )
}

export default Additem