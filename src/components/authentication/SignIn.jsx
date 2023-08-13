import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import '../../assets/css/auth.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';




const SignIn = ({setIsLogin, setIsForgottenPassword}) => {

    const[serverError, setServerError] = useState('');
    const navigate = useNavigate();


    const schema = yup.object({
        email: yup.string().email("Enter a valid email address").required("Email is required"), 
        password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long')
        .max(15, 'Password must not exceed 15 characters')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[\W_]/, 'Password must contain at least one special character')
        
    });

    const{register, handleSubmit, reset, formState: {errors}} = useForm({resolver: yupResolver(schema)});

    const handleSignIn = async (data) => {
        try {
            if (!data) return;
            const response = await axios.post('https://plant-nest.onrender.com/api/v1/auth/', data);
            const user = response?.data;
            localStorage.setItem("user", JSON.stringify(user));
            reset();
            navigate('/');
        } catch (err) {
            const error = err?.response?.data.message;
            setServerError(error);
        }
    }
    

    return (
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center animate-form">
            <div className="text-center ">
                <h3 className="fw-bold" style={{color: '#abd373'}}>Welcome Back</h3>
                <small className="fw-medium">Let's Continue Growing Together</small><br/>
                <small className="text-secondary">Sign in to your account to access your personalized plant haven</small> 
            </div>
            <form className="m-2" onSubmit={handleSubmit(handleSignIn)}>
                <div className="row">
                    <div className="col-12">
                        <label htmlFor="email" className="form-label fw-medium mt-2">Email</label>
                        <input type="email" className="form-control inputs-border shadow-none" id="email" {...register('email')}/>
                        {errors.email && <small className="text-danger">{errors.email.message}</small>}
                    </div>

                    <div className="col-12">
                        <label htmlFor="password" className="form-label fw-medium mt-2">Password</label>
                        <input type="password" className="form-control inputs-border shadow-none" id="password" {...register('password')}/>
                        {errors.password && <small className="text-danger">{errors.password.message}</small>}
                    </div>

                </div>
                
                <div className="mt-3">
                    <button type="submit" className="btn w-100 " style={{background: '#abd373', color: '#fff'}}>Sign In</button>
                    <div className="d-flex justify-content-between mt-1">
                        <p className="fw-medium" style={{color: 'gray', fontSize: '12px'}}>Don't have an account?
                        <small className='fw-normal' style={{color: '#89af55', cursor: 'pointer'}}
                            onClick={() => setIsLogin(false)}> Sign Up</small></p>
                        <small className='fw-semibold hover' 
                            style={{ cursor: 'pointer', fontSize: '12px' }} 
                            onClick={() => setIsForgottenPassword(true)}
                        >
                            Forgot your password
                        </small>
                    </div>
                </div>
            </form>

            {serverError && <p className='text-danger text-center' style={{fontSize: '12px'}}>{serverError}</p>}
        </div>
    );
}
 
export default SignIn;