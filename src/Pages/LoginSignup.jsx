import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className='loginsignup-container'>
                <h1>Sign Up</h1>
                <div className='loginsignup-fields'>
                    <input type="text" placeholder='Kritika Rokka' />
                    <input type="email" placeholder='kri017@gmail.com' />
                    <input type="password" placeholder='Password' />

                </div>
                <button>Continue</button>
                <p className='loginsignup-login'>
                    Already have an account? <span>login here </span><hr />
                </p>
                <div className='loginsignup-agree'>
                    <input type='checkbox' name='' id='' />
                    <p>By continuing,I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup