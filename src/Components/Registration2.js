import { useFormik } from "formik"
import { SignUpSchma } from '../Schemas/Schemas1'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';


function Registration2() {
 
     const Navigate = useNavigate()

    
      const {values, errors, touched, handleSubmit, handleChange , handleBlur,setFieldValue } = useFormik({

        initialValues: { name: '', email: '', password: '', age: '', country: '', state: '', phone_number: '', ImageFile:"" },
            
        validationSchema: SignUpSchma,
        onSubmit: (values,action) => {
          
             const CallApi = async (data) => {

                try {
                   let Response = await axios.post("http://192.168.2.124:9001/signup", { ...data }) // formData in place of data 
                    console.log(Response);
                    swal("Success", "Register successfully", "success")
                    setTimeout(()=>Navigate('/Login'),2000)
                    
                   } catch {
                    swal("Oops!", "Register Failed", "error")
                }   
             }
            CallApi(values)
            action.resetForm()
        
        }

    })

  
 return (
        <div>

            <form className='container' onSubmit={handleSubmit}>
                <h1>Registration_Form</h1>
               
                <br></br>
                 <img className="image" src={values.ImageFile?(URL.createObjectURL(values.ImageFile)) : require("../Images/images.jpeg")} alt="img"/>
                 <input type='file' id='ImageFile' name='ImageFile' placeholder='Picture' onBlur={handleBlur} onChange={(e)=>setFieldValue("ImageFile",e.target.files[0])}/>
                 {errors.ImageFile && touched.ImageFile ? <div className='error'>{errors.ImageFile}</div>: null}

                <br></br>
                <br></br>
               

                <label className='Label' htmlFor='name'>Name</label>
                <input type='text' autoComplete='off' className='input' id='name' name='name' placeholder='name' onChange={handleChange} onBlur={handleBlur} value={values.name} />
                {errors.name && touched.name ? <div className='error'>{errors.name}</div> : null}

                <br></br>
                <br></br>

                <label className='Label' htmlFor='email' >Email</label>
                <input type='email' autoComplete='off' className='input' id='email' name='email' placeholder='Email'
                onChange={handleChange} onBlur={handleBlur} value={values.email} />
                {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}

                <br></br>
                <br></br>

                <label className='Label' htmlFor='password'>Password</label>
                <input type='password' autoComplete='off' className='input' id='password' name='password' placeholder='Password'
                onChange={handleChange} onBlur={handleBlur} value={values.password} />
                {errors.password && touched.password ? <div className='error'>{errors.password}</div> : null}

                <br></br>
                <br></br>

                <label className='Label' htmlFor='age'>Age</label>
                <input type='text' autoComplete='off' className='input' id='age' name='age' placeholder='age'
                onChange={handleChange} onBlur={handleBlur} value={values.age} />
                {errors.age && touched.age ? <div className='error' >{errors.age}</div> : null}

                <br></br>
                <br></br>

                <label className='Label' htmlFor='country'>Country</label>
                <input type='text' autoComplete='off' className='input' id='country' name='country' placeholder='country'
                onChange={handleChange} onBlur={handleBlur} value={values.country} />
                {errors.country && touched.country ? <div className='error' >{errors.country}</div> : null}

                <br></br>
                <br></br>

                <label className='Label' htmlFor='state'>State</label>
                <input type='text' autoComplete='off' className='input' id='state' name='state' placeholder='state'
                onChange={handleChange} onBlur={handleBlur} value={values.state} />
                {errors.state && touched.state ? <div className='error' >{errors.state}</div> : null}

                <br></br>
                <br></br>


                <label className='Label' htmlFor='phone_number'>Phone</label>
                <input type='number' autoComplete='off' className='input' id='phone_number' name='phone_number' placeholder='phone'
                onChange={handleChange} onBlur={handleBlur} value={values.phone_number} />
                {errors.phone_number && touched.phone_number ? <div className='error' >{errors.phone_number}</div> : null}

                <br></br>
                <br></br>
              <button type='submit' >Register</button>

        </form>

        </div>
    )
}

export default Registration2