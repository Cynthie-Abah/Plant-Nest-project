import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const SignUp = ({setIsLogin}) => {
    const[serverError, setError] = useState('');
    const navigate = useNavigate();

    const schema = yup.object({
        fullname: yup.string().required("Fullname is required"),
        username: yup.string().required("username is required"),
        email: yup.string().email("Enter a valid email address").required("Email is required"),
        contact: yup.string().matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, 'Invalid phone number').required('Phone number is required'),
        password: yup.string()
            .min(8, 'Password must be at least 8 characters long')
            .max(15, 'Password must not exceed 15 characters')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
            .matches(/[\W_]/, 'Password must contain at least one special character')
            .required('Password is required')
    });
    

    const{register, handleSubmit, reset, formState: {errors}} = useForm({resolver: yupResolver(schema), abortEarly: false});

    const handleSignUp = async (data) =>{
        const userData = {
            fullname: data.fullname,
            username: data.username,
            contactNumber: data.contact,
            email: data.email,
            password: data.password,
        };
        try{
            if(!userData) return;
            const response = await axios.post('https://plant-nest.onrender.com/api/v1/auth/signup', userData);
            const user = response?.data;
            localStorage.setItem("user", JSON.stringify(user));
            reset();
        }catch(err){
            setError(err.response.data.message)
        }
    }

    return (
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center animate-form">
            <div className="text-center ">
                <h3 className="bold" style={{color: '#abd373'}}>Create an account</h3>
                <small className="fw-medium">Bringing life indoors, one plant at a time</small><br/>
                <small className="text-secondary mb-2" style={{fontSize: '12px'}}>Explore our collection, and let's plant, nurture, and flourish together</small> 
            </div>
            <form className="m-2" onSubmit={handleSubmit(handleSignUp)}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label htmlFor="fullname"className="form-label fw-medium mt-2">Full Name</label>
                        <input type="text" className="inputs-border form-control shadow-none" id="fullname" {...register('fullname')}/>
                        {errors.fullname && <small className="text-danger">{errors.fullname.message}</small>}
                    </div>

                    <div className="col-12 col-md-6">
                        <label htmlFor="username"className="form-label fw-medium mt-2">User Name</label>
                        <input type="text" className="inputs-border form-control shadow-none" id="username" {...register('username')}/>
                        {errors.username && <small className="text-danger">{errors.username.message}</small>}
                    </div>

                    <div className="col-12 col-md-6">
                        <label htmlFor="contact" className="form-label fw-medium mt-2">Contact</label>
                        <input type="text" className="inputs-border form-control shadow-none" id="contact" {...register('contact')}/>
                        {errors.contact && <small className="text-danger">{errors.contact.message}</small>}
                    </div>

                    <div className="col-12 col-md-6">
                        <label htmlFor="email" className="form-label fw-medium mt-2">Email</label>
                        <input type="email" className="inputs-border form-control shadow-none" id="email" {...register('email')}/>
                        {errors.email && <small className="text-danger">{errors.email.message}</small>}
                    </div>

                    <div className="col-12 col-md-6">
                        <label htmlFor="password" className="form-label fw-medium mt-2">Password</label>
                        <input type="password" className="inputs-border form-control shadow-none" id="password" {...register('password')}/>
                        {errors.password && <small className="text-danger">{errors.password.message}</small>}
                    </div>

                </div>
                
                <div className="d-flex align-items-center justify-content-between mt-3">
                    <button type="submit" className="btn" style={{ background: '#abd373', color: '#fff' }}>
                        Create Account
                    </button>
                    <p className="mt-2" style={{fontSize: '14px'}}>Already have an account?
                        <small
                        className="fw-normal"
                        style={{ color: '#89af55', cursor: 'pointer' }}
                        onClick={() => setIsLogin(true)}
                        >
                        Sign in
                        </small>
                    </p>
                </div>

                {serverError && <p className='text-danger text-center' style={{fontSize: '12px'}}>{serverError}</p>}
            </form>
        </div>
    );
}
 
export default SignUp;