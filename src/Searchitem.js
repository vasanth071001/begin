import React from 'react'

const Searchitem = ({search,setsearch}) => {
  return (
    <form onSubmit={(e)=> e.preventDefault()}>
 <input
  type='text'
  placeholder='Search'
  id='search'
  value={search}
  onChange={(e)=>setsearch(e.target.value)}
  />


    </form>
  )
}

export default Searchitem