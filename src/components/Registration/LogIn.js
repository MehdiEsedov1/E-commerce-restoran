import React from 'react';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

export default function Login() {

  const navigator = useNavigate();

  const validate = values => {
    const errors = {};

    if (!values.nickname) {
      errors.nickname = "Required !"
    }
    else if (values.nickname.length < 10) {
      errors.nickname = "Nickname must contain min 10 symbol"
    }

    if (!values.password) {
      errors.password = "Required !"
    }
    else if (values.password.length < 10) {
      errors.password = "Password must contain min 10 symbol"
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      nickname: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      console.log(values);
    }
  })

  return (
    <div className='sign-up'>
      <form onSubmit={formik.handleSubmit}>
        <img src={logo} alt="Hamburger" />
        <div className='sign-up-inputs-container'>
          <input type="text" id='nickname' placeholder='Nickname' value={formik.values.nickname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.nickname && formik.errors.nickname ? <div style={{ color: 'black' }}>{formik.errors.nickname}</div> : null}
          <input type="password" id='password' placeholder='Password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.password && formik.errors.password ? <div style={{ color: 'black' }}>{formik.errors.password}</div> : null}
        </div>
        <div className='sign-up-checkbox-container'>
          <input type="checkbox" />
          <p>I accept terms and conditions</p>
        </div>
        <div className='sign-up-buttons-container'>
          <button onClick={() => { navigator('/signup') }}>Sign up</button>
          <button type='submit' onSubmit={formik.handleSubmit}>Log in</button>
        </div>
      </form>
    </div>
  )
}