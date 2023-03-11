import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { SignUpSchma } from '../Schemas/Schemas1'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'



function AddUser() {
const Navigate = useNavigate()
    const callapi = async(data)=>{
        try{
          const Result = await axios.post("https://63886c49d94a7e50409b1179.mockapi.io/DashboardData",{...data})
            console.log(Result);
            swal("Success", "AddUser successfully", "success")
            Navigate('/Dashboard')
        }catch{
            swal("Oops!", "AddUser Failed", "error")
          
        }
    }
     
    
const {errors,touched ,handleSubmit,getFieldProps} = useFormik({
    initialValues : {name:'', email:'', password :'' , age:'', country:'', state:'', phone_number:''},
     validationSchema : SignUpSchma,
     onSubmit : (values,action)=>{
      console.log('>>>>>>>>>>',values);
        action.resetForm()
        callapi(values)
      
   }
})


  return (
    <div className='Adduser'>
        <form onSubmit={handleSubmit}>
        <h1>AddUser</h1>
        <label className='Label' htmlFor='name'>Name</label>
        <input type='text' id='name' name='name'  autoComplete='off' className='input'{...getFieldProps('name')} ></input>
          {errors.name && touched.name? <div>{errors.name}</div>: null}
        <br></br>
        <br></br>

        <label className='Label' htmlFor='email'>Email</label>
        <input  type='email' id='email' name='email' autoComplete='off' className='input'{...getFieldProps('email')} ></input>
        {errors.email && touched.email? <div>{errors.email}</div>: null}
        <br></br>
        <br></br>

        <label className='Label' htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' autoComplete='off' className='input'{...getFieldProps('password')}></input>
        {errors.password && touched.password? <div>{errors.password}</div>: null}
        <br></br>
        <br></br>

        <label className='Label' htmlFor='age'>Age</label>
        <input type='text' id='age' name='age' autoComplete='off' className='input'{...getFieldProps('age')}></input>
        {errors.age && touched.age? <div>{errors.age}</div>: null}
        <br></br>
        <br></br>

        <label className='Label' htmlFor='country'>Country</label>
        <input type='text' id='country' name='country' autoComplete='off' className='input'{...getFieldProps('country')}></input>
        {errors.country && touched.country? <div>{errors.country}</div>: null}
        <br></br>
        <br></br>

        <label className='Label' htmlFor='state'>State</label>
        <input type='text' id='state' name='state' autoComplete='off' className='input'{...getFieldProps('state')}></input>
        {errors.state && touched.state? <div>{errors.state}</div>: null}
        <br></br>
        <br></br>

        <label className='Label' htmlFor='phone_number'>Phone</label>
        <input type='number' id='phone_number' name='phone_number' autoComplete='off' className='input'{...getFieldProps('phone_number')}></input>
        {errors.phone_number && touched.phone_number? <div>{errors.phone_number}</div>: null}
        <br></br>
        <br></br>
        <button type='submit'>Submit</button>
        </form>
      

    </div>
  )
}

export default AddUser