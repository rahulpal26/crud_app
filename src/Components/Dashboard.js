import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




const Dashboard = () => {
  const [MyData, SetData] = useState()
  const [Errors, SetErrors] = useState('')
  const [Currentpage, SetCurrentpage] = useState(1)
  

 const Navigate = useNavigate()

  const navigate = () => {
    Navigate('/AddUser')
  }

  const LoadView = (id) => {
    Navigate(`/view/${id}`)
  }

  const LoadEdit = (id) => {
    Navigate(`/Edit/${id}`)
  }


  useEffect(() => {
    Dashboard_Data()
  }, [])

 


  const Dashboard_Data = async () => {
    try {
      const Result = await axios.get(`https://63886c49d94a7e50409b1179.mockapi.io/DashboardData`)
      SetData(Result.data)
      console.log(Result);


    } catch (error) { 
      SetErrors(error.message)
    }

  }

  const LoadDelete = async (id) => {
    await axios.delete(`https://63886c49d94a7e50409b1179.mockapi.io/DashboardData/${id}`)
    Dashboard_Data();
  }


  const Postperpage = 10
  const LastDataIndex = Currentpage * Postperpage
  const FirstDataIndex = LastDataIndex - Postperpage
  const currentPosts = MyData?.slice(FirstDataIndex, LastDataIndex,)
 
  let Pages = []
  for (let i = 1; i <= Math.ceil(MyData?.length / Postperpage); i++) {
        Pages.push(i); 
  }


  return (

    <div >
      <button className='btn btn-info' onClick={navigate}>Add User</button>
      <table className="table">

        <thead className="thead-dark">
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Age</th>
            <th scope="col">Country</th>
            <th scope="col">State</th>
            <th scope="col">Phone</th>
            <th scope="col" className='text-center'> Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentPosts?.map((value, index) => {
            return (

              <tr key={index}>
                <td>{index+1}</td>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.password}</td>
                <td>{value.age}</td>
                <td>{value.country}</td>
                <td>{value.state}</td>
                <td>{value.phone_number}</td>
                <td className='text-center'><button className='btn btn-primary' onClick={() => {LoadView(value.id)}}>View</button>
                  <button className='btn btn-info' onClick={() => {LoadEdit(value.id)}} >Edit</button>
                  <button className='btn btn-danger' onClick={() => {LoadDelete(value.id)}}>Delete</button></td>
               </tr>
             )
          })
          }

        </tbody>
      </table>

      <br></br>

     {Pages.length>1?
      <div className='button1'>
      <button className='button' onClick={() => (Currentpage>1? SetCurrentpage(Currentpage-1):'')}>Previous</button>
      <button className='button'  onClick={() => (Currentpage>1? SetCurrentpage(Currentpage-1):'')}>{Currentpage}</button>
        <button className='button' onClick={() => (Currentpage>=1 && Currentpage<Pages.length? SetCurrentpage(Currentpage+1):'')}>{Currentpage+1}</button>
       <button className='button' onClick={() => (Currentpage>=1 && Currentpage<Pages.length? SetCurrentpage(Currentpage+1):'')}>{Currentpage+2}</button>
       <button className='button' onClick={() => (Currentpage>=1 && Currentpage<Pages.length? SetCurrentpage(Currentpage+1):'')}>Next</button>
      </div> :''
    }
      
      
      <h1 className='text-danger text-center'>{Errors}</h1>

    </div>

  )
}

export default Dashboard