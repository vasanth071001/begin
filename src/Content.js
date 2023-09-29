import React from 'react'
import Itemslist from './Itemslist';


export const Content = ({items,handlecheck,handledelete}) => {
      
  return (
    <main>
        {(items.length)?
       <Itemslist 

       items={items}
      
       handledelete={handledelete}
       handlecheck={handlecheck}
       />
        :
        <div>no items Exist </div>
}
    </main>
    
  )
}
export default Content
