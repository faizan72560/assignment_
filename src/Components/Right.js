import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Right = (props) => {

    const [data1,setdata1]=useState({})

    useEffect(() => {
        const get=async()=>{
            const {data}=await axios.get(`https://jsonplaceholder.typicode.com/users/${props?.data!==undefined&&props?.data[0]?.id}`)
            console.log(data)
            
            console.log(data1)

            // const myArray = Object.entries(data);
            setdata1(data)
            console.log(data1)

            if(localStorage.getItem("id")){

            

            const id=localStorage.getItem("id")
    
            var Data=data.filter((elem)=>{
                if(elem.id==id)
                return elem
            })
            console.log(Data)
            setdata1(Data)
            console.log(data1)
        }
    }
        get()

      
    }, [props.data1])
    
  return (
    <div className='mt-5 d-flex' style={{height:"60vh",width:"40vw",border:"1px solid black"}}>
        <div>
            <p>
            Todo Id
            </p>
            <p>
            Name
            </p>
            <p>
            userName
            </p>
            <p>
            email
            </p>
            <p>
            address
            </p>
            <p>
            phone
            </p>
            <p>
            website
            </p>



        </div>
        <div>
        <p style={{marginLeft:"20px"}}>
            {console.log(props.data)}
            {/* {console.log(props.data[0].id)} */}
            {data1?.id}
            </p>
            <p>
            {data1?.name}
                
            {/* {props?.data[0]?.title} */}
            </p>
            <p>
            {data1?.username}
            {/* {props?.data[0]?.completed?"Completed":"Incomplete"} */}
            </p>

            <p>
            {data1?.email}
            {/* {props?.data[0]?.completed?"Completed":"Incomplete"} */}
            </p>

            <p>
            {data1?.address?.city}
            {/* {props?.data[0]?.completed?"Completed":"Incomplete"} */}
            </p>
            <p>
            {data1?.phone}
            {/* {props?.data[0]?.completed?"Completed":"Incomplete"} */}
            </p>
            <p>
            {data1?.website}
            {/* {props?.data[0]?.completed?"Completed":"Incomplete"} */}
            </p>



        </div>


        <div>
          

        </div>


    </div>
  )
}

export default Right