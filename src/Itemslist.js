import React from 'react'
import Lineitem from './Lineitem';


const Itemslist = ({items,handlecheck,handledelete}) => {
  return (
    <ul>
    {items.map((item)=> 
    <Lineitem 
    item={item}
    key={item.id}
      
      handledelete={handledelete}
      handlecheck={handlecheck}

    />
   


        
        )}
</ul>
  )
}

export default Itemslist