import { useFormik } from 'formik'
import { SignUpSchma1 } from '../Schemas/Schemas2'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { Link } from 'react-router-dom'


function Login() {
   const Navigate = useNavigate()

   const CallApi = async (Data) => {
    console.log('Dataaaaaaaaaaaaaaa',Data);
    try {
      const Response = await axios.post("http://192.168.2.124:9001/login", { ...Data })
     
      console.log(Response);
       swal("Success", "login successfully", "success",)
            setTimeout(()=>Navigate('/Dashboard'),2000)
    
      }catch {
      swal("Oops!", "login Failed", "error")
     }
    
}



   
   const {errors,touched, getFieldProps, handleSubmit } = useFormik({
        
    initialValues: { email: '', password: '' },
    validationSchema: SignUpSchma1,

    onSubmit: (values, action) => {
      action.resetForm()
      CallApi(values)
      
     
    }

  })

  return (
    <div className='LoginUser'>
      <form onSubmit={handleSubmit}>
        <h1>Login_Form</h1>
        <label className='Label' htmlFor='email' >Email</label>
        <input type='email' autoComplete='off' className='input' id='login_email' name='email' placeholder='Email'
          {...getFieldProps('email')} />
        {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
        
        <br></br>
        <br></br>

        <label className='Label' htmlFor='password'>Password</label>
        <input type='password' autoComplete='off' className='input' id='login_password' name='password' placeholder='Password'
          {...getFieldProps('password')} />
        {errors.password && touched.password ? <div className='error'>{errors.password}</div> : null}

        <br></br>
        <br></br>

        <button type='submit' >Login</button>
         <br></br>
         <br></br>
        
         if not Register yet! please Register
         <br></br>
        <Link to='/Registration'>  <button>Registration</button> </Link>

      </form>


    </div>
  )
}

export default Login