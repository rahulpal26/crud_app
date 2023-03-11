import React, { useEffect, useState } from 'react'
//import { useFormik } from 'formik'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function View() {

 const[Values,setValues]= useState()

 const {id} = useParams()
 

 
 
 const CallApi = async (id) => {
    const Response = await axios.get(`https://63886c49d94a7e50409b1179.mockapi.io/DashboardData/${id}`)
     setValues(Response?.data)
     console.log(Response);
     
}

useEffect(()=>{
    CallApi(id)
},[id])

 
    
  return (
    <div>
        <>
        <table className="table">
            <thead className="thead-dark">
            <tr>
          <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Age</th>
            <th scope="col">Country</th>
            <th scope="col">State</th>
            <th scope="col">Phone</th>
           
          </tr>
          </thead>
          <tbody>
                <tr>
                <td>{Values && Values.id}</td>
                <td>{Values && Values.name}</td>
                <td>{Values && Values.email}</td>
                <td>{Values && Values.password}</td>
                <td>{Values && Values.age}</td>
                <td>{Values && Values.country}</td>
                <td>{Values && Values.state}</td>
                <td>{Values && Values.phone_number}</td>
                </tr>
          </tbody>
        </table>
        </>
      
     
    </div>
  )
}

export default View