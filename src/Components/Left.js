import { Button } from 'bootstrap'
import React from 'react'
import axios from 'axios'
import { useEffect,useState} from 'react'
import Right from './Right'


let tt;
const Left = () => {

    const [Data, setData] = useState([])
    const [get, setget] = useState(true)


    useEffect(()=>{
        async function get(){

            const {data}=await axios.get("https://jsonplaceholder.typicode.com/todos")
            console.log(data)
            setData([...data])
            console.log(Data)
        }

        get()


    },[])




  return (
    <div className='d-flex' style={{gap:"10vw"}}>
    
    <div style={{display:"flex",flexDirection:"column",width:"40vw"}}>
    <div className='d-flex justify-content-between'>
        <div>
        <h2>Todo List</h2>
        </div>
        <div className='mt-2'>
    
  <input type="text" placeholder="Search.." name="search"/>
  

        </div>

    </div>

<table style={{border:"1px solid black",alignItems:"center"}}>
<thead>
  <tr style={{border:"1px solid black"}}>
    <th  style={{border:"1px solid black",alignItems:"center"}}>Todo Id</th>
    <th  style={{border:"1px solid black",alignItems:"center"}}>Title</th>
    <th  style={{border:"1px solid black"}}>Status</th>
    <th  style={{border:"1px solid black"}}>Action</th>
  </tr>
</thead>
<tbody>

    {Data.map((elem,index)=>{
        return(

            <tr style={{border:"1px solid black"}}>
         <td style={{border:"1px solid black"}}>{elem.id}</td>
         <td style={{border:"1px solid black"}}>{elem.title}</td>
         <td style={{border:"1px solid black"}}>{elem.completed?"Completed":"Incomplete"}</td>
         <td style={{border:"1px solid black"}}><button onClick={()=>{
            {get?setget(false):setget(true)}
             tt=Data.filter((ele)=>{
                if(ele.id==elem.id){
                    return ele
                }
            })
            console.log(tt)

         }}>View User</button></td>
     
         
       </tr>
             )

    })}
  
</tbody>
</table>

</div>
<Right data={tt} data1={get}/>
</div>
  )
}

export default Left