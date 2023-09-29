
import Additem from './Additem';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import  { useEffect, useState } from 'react'
import Searchitem from './Searchitem';


function App() {
  const API_URL ="http://localhost:3500/items"
  const [items,setitems] = useState([])
    /*[
    {
                id:1,
                checked:true,
                item:"webpentesting"
            },
            {
                id:2,
                checked:false,
                item:"app pentesting"
            },
            {
                id:3,
                checked:false,
                item:"cloud pentesting"
            }
            
        ]*/

        const [newitem,setnewitem] = useState('')

    
  
  function handledelete(id){
    const list = items.filter((item) => item.id!== id);
    setitems(list);
    localStorage.setItem("todo",JSON.stringify(list));
}
function handlecheck(id){
  const list = items.map((item)=> item.id ===id ?{...item,checked:!item.checked}:item)
  setitems(list)
  localStorage.setItem("todo",JSON.stringify(list));
}
const  additem = (item) =>{
  const id=items.length?items[items.length-1].id+1:1
  const list={id,checked:false,item}
  const listitems=[...items,list]
  setitems(listitems)
  localStorage.setItem("todo",JSON.stringify(listitems));

}
function handlesubmit(e){
  e.preventDefault();
  console.log(newitem);
  
  setnewitem('')
  additem(newitem)
}

const [search,setsearch] = useState('')

useEffect(()=>{
const fetchitems = async ()=>{
  try{
    const response = await fetch(API_URL)
    const listitem = await response.json() 
    setitems(listitem)
  }
  catch(err){
    console.log(err.message);

  }
}
(async () => await fetchitems())()

},[])

  return (
    <div className="App">
      <Header />
      <Additem 
      newitem={newitem}
      setnewitem={setnewitem}
      handlesubmit={handlesubmit}
      
      />
      <Searchitem 
      sarch={search}
      setsearch={setsearch}

      />
      <Content 
      items={items.filter(item=> ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      
      handledelete={handledelete}
      handlecheck={handlecheck}
      
      />
      <Footer 
     length ={items.length}
      />
      
    </div>
  );
}

export default App;
