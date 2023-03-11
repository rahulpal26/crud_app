import React, { useState } from 'react'


function Registration() {
  const [RegisterData, setRegisterData] = useState({ UserName: '', email: '', password: '', confirm_Password: '', phone: '' })
  const [RegisterError, setRegisterError] = useState({})


  const onHandle = (e) => {
    setRegisterData({ ...RegisterData, [e.target.name]: e.target.value })
    if (!RegisterData.UserName) {
      setRegisterError({ ...RegisterError, UserName: "UserName is Required" })



    } else if (RegisterData.UserName.length < 5 || RegisterData.UserName.length > 20) {
      setRegisterError({ ...RegisterError, UserName: "Invalid UserName" })

    } else {
      setRegisterError({ ...RegisterError, UserName: "" })

    }
  }

  const onHandle1 = (e) => {
    const EmailPatern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    setRegisterData({ ...RegisterData, [e.target.name]: e.target.value })

    if (!RegisterData.email) {
      setRegisterError({ ...RegisterError, email: 'Email is Required' })

    } else if (!EmailPatern.test(RegisterData.email)) {
      setRegisterError({ ...RegisterError, email: ' Invalid Email' })
    } else {
      setRegisterError({ ...RegisterError, email: "" })
    }

  }

  const onHandle2 = (e) => {
    setRegisterData({ ...RegisterData, [e.target.name]: e.target.value })


    if (!RegisterData.password) {
      setRegisterError({ ...RegisterError, password: 'Password is Required' })


    } else if (RegisterData.password.length < 9) {
      setRegisterError({ ...RegisterError, password: 'Invalid Password length' })

    } else {
      setRegisterError({ ...RegisterError, password: "" })
    }

  }

  const onHandle3 = (e) => {
    setRegisterData({ ...RegisterData, [e.target.name]: e.target.value })

    if (!RegisterData.confirm_Password) {
      setRegisterError({ ...RegisterError, confirm_Password: 'Please confirm Password' })


    } else if (RegisterData.confirm_Password.length < 9 || RegisterData.confirm_Password.length > 22) {
      setRegisterError({ ...RegisterError, confirm_Password: 'Invalid confirm_Password length' })

    } else if (!RegisterData.password && RegisterData.confirm_Password) {
      setRegisterError({ ...RegisterError, confirm_Password: ' Confirm Password not matched' })
    } else {
      setRegisterError({ ...RegisterError, confirm_Password: "" })
    }
  }

  const onHandle4 = (e) => {
    setRegisterData({ ...RegisterData, [e.target.name]: e.target.value })
    if (!RegisterData.confirm_Password) {
      setRegisterError({ ...RegisterError, confirm_Password: 'Please confirm Password' })


    } else if (RegisterData.confirm_Password.length < 9 || RegisterData.confirm_Password.length > 22) {
      setRegisterError({ ...RegisterError, confirm_Password: 'Invalid confirm_Password length' })

    } else if (!RegisterData.password && RegisterData.confirm_Password) {
      setRegisterError({ ...RegisterError, confirm_Password: ' Confirm Password not matched' })
    } else {
      setRegisterError({ ...RegisterError, confirm_Password: "" })
    }

    if (RegisterData.phone.length < 9) {
      setRegisterError({ ...RegisterError, phone: 'Invalid phone' })
    }

    else {
      setRegisterError({ ...RegisterError, confirm_Password: "" })

    }

  }

  const onSubmit = (e) => {
    e.preventDefault()
 

  }

  return (
    <div>
      <form className='container'>
        <h1>Registration_Form</h1>
        <label className='Label'>UserName</label>
        <input type='text' className='input' name='UserName' placeholder='Name' onChange={onHandle} />
        <div className='Error'>{RegisterError.UserName}</div>
        <br></br>
        <br></br>
        <label className='Label' >Email</label>
        <input type='email' className='input' name='email' placeholder='Email' onChange={onHandle1} />
        <div className='Error'>{RegisterError.email}</div>
        <br></br>
        <br></br>
        <label className='Label'>Password</label>
        <input type='password' className='input' name='password' placeholder='Password' onChange={onHandle2} />
        <div className='Error'>{RegisterError.password}</div>
        <br></br>
        <br></br>
        <label className='Label'>Confirm Password</label>
        <input type='password' className='input' name='confirm_Password' placeholder='Confirm Password' onChange={onHandle3} />
        <div className='Error'>{RegisterError.confirm_Password}</div>
        <br></br>
        <br></br>
        <label className='Label'>Phone</label>
        <input type='number' className='input' name='phone' placeholder='Phone' onChange={onHandle4} />
        <div className='Error'>{RegisterError.phone}</div>
        <br></br>
        <br></br>
        <button type='submit' onClick={onSubmit}>Register</button>


      </form>

    </div>
  )
}


export default Registration