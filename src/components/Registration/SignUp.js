import React from 'react';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Signup() {

    const navigator = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(6, 'Must be 6 characters or more')
                .required('Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        }),
        onSubmit: values => {
            console.log(values);
        }
    })

    return (
        <div className='sign-up'>
            <form onSubmit={formik.handleSubmit}>
                <img src={logo} alt="Hamburger" />
                <div className='sign-up-inputs-container'>
                    <input type="text" id='name' placeholder='Nickname' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.name && formik.errors.name ? <div style={{ color: 'black' }}>{formik.errors.name}</div> : null}
                    <input type="e-mail" id='email' placeholder='E-mail' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email ? <div style={{ color: 'black' }}>{formik.errors.email}</div> : null}
                    <input type="password" id='password' placeholder='Password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.password && formik.errors.password ? <div style={{ color: 'black' }}>{formik.errors.password}</div> : null}
                    <input type="password" id='confirmPassword' placeholder='Again password' value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div style={{ color: 'black' }}>{formik.errors.confirmPassword}</div> : null}
                </div>
                <div className='sign-up-checkbox-container'>
                    <input type="checkbox" />
                    <p>I accept terms and conditions</p>
                </div>
                <div className='sign-up-buttons-container'>
                    <button type='submit' onSubmit={formik.handleSubmit}>Sign up</button>
                    <button onClick={() => { navigator('/login') }}>Log in</button>
                </div>
            </form>
        </div>
    )
}