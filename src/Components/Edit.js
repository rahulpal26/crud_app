import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import { SignUpSchma } from '../Schemas/Schemas1'
import { useNavigate } from 'react-router-dom'



function Edit() {
  const Navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
    callapi(id)
  },[])
    
    const callapi = async(id)=>{
   
      const Result = await axios.get(`https://63886c49d94a7e50409b1179.mockapi.io/DashboardData/${id}`)
        console.log('.................',Result.data);
        setValues(Result.data)
        
    }

    const putapi = async(data)=>{
        await axios.put(`https://63886c49d94a7e50409b1179.mockapi.io/DashboardData/${id}`,{...data})
     }
 

    const {values,errors,touched ,handleSubmit,handleChange,setValues} = useFormik({
     Values : {name:'', email:'', password :'' , age:'', country:'', state:'', phone_number:''},
     validationSchema : SignUpSchma,
     onSubmit : (values,action)=>{
    action.resetForm()
    
    putapi(values)
    Navigate('/Dashboard');
   
}
})


    
  return (
    <div className='Edituser'>
    <form onSubmit={handleSubmit}>
    <h1>EditUser</h1>
    <label className='Label' htmlFor='name'>Name</label>
    <input type='text' id='name' name='name'  autoComplete='off' className='input'onChange={handleChange} value={values.name}  ></input>
      {errors.name && touched.name ? <div>{errors.name}</div>: null}
    <br></br>
    <br></br>

    <label className='Label' htmlFor='email'>Email</label>
    <input  type='email' id='email' name='email' autoComplete='off' className='input'onChange={handleChange} value={values.email} ></input>
    {errors.email && touched.email ? <div>{errors.email}</div>: null}
    <br></br>
    <br></br>

    <label className='Label' htmlFor='password'>Password</label>
    <input type='password' id='password' name='password' autoComplete='off' className='input'onChange={handleChange} value={values.password}></input>
    {errors.password && touched.password ? <div>{errors.password}</div>: null}
    <br></br>
    <br></br>

    <label className='Label' htmlFor='age'>Age</label>
    <input type='text' id='age' name='age' autoComplete='off' className='input'onChange={handleChange} value={values.age}></input>
    {errors.age && touched.age ? <div>{errors.age}</div>: null}
    <br></br>
    <br></br>

    <label className='Label' htmlFor='country'>Country</label>
    <input type='text' id='country' name='country' autoComplete='off' className='input'onChange={handleChange} value={values.country}></input>
    {errors.country && touched.country ? <div>{errors.country}</div>: null}
    <br></br>
    <br></br>

    <label className='Label' htmlFor='state'>State</label>
    <input type='text' id='state' name='state' autoComplete='off' className='input'onChange={handleChange} value={values.state}></input>
    {errors.state && touched.state ? <div>{errors.state}</div>: null}
    <br></br>
    <br></br>

    <label className='Label' htmlFor='phone_number'>Phone</label>
    <input type='tel' id='phone_number' name='phone_number' autoComplete='off' className='input'onChange={handleChange} value={values.phone_number}></input>
    {errors.phone_number && touched.phone_number ? <div>{errors.phone_number}</div>: null}
    <br></br>
    <br></br>
    <button type='submit'>Submit</button>
    </form>
  

</div>
   
  )
}

export default Edit