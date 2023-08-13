import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";


const ForgottenPasssword = () => {

    const schema = yup.object({
        email: yup.string().email("Enter a valid email address").required("Email is required"),
        password: yup.string()
            .min(8, 'Password must be at least 8 characters long')
            .max(15, 'Password must not exceed 15 characters')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
            .matches(/[\W_]/, 'Password must contain at least one special character')
            .required('Password is required'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
    });
    
    
    const{register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema), abortEarly: false});
    
    const handlePasswordUpdate = async (data) =>{
        try{
            if(!data) return;
        }catch(err){
            const error = err.message
            console.log(error);
        }
    }


    return (
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center animate-form">
            <div className="text-center ">
                <h3 className="fw-bold" style={{color: '#abd373'}}>Change Password</h3>
                <small className="fw-medium">Enter your credentials</small><br/>
            </div>
            <form className="m-2" onSubmit={handleSubmit(handlePasswordUpdate)}>
                <div className="row">
                    <div className="col-12">
                        <label htmlFor="email" className="form-label fw-medium mt-2">Email</label>
                        <input type="email" className="form-control shadow-none inputs-border" id="email" {...register('email')}/>
                        {errors.email && <small className="text-danger">{errors.email.message}</small>}
                    </div>

                    <div className="col-12">
                        <label htmlFor="password" className="form-label fw-medium mt-2">Password</label>
                        <input type="password" className="form-control shadow-none inputs-border" id="password" {...register('password')}/>
                        {errors.password && <small className="text-danger">{errors.password.message}</small>}
                    </div>

                    <div className="col-12">
                        <label htmlFor="confirmpassword" className="form-label fw-medium mt-2">Confirm Password</label>
                        <input type="password" className="form-control shadow-none inputs-border" id="confirmpassword" {...register('confirmPassword')}/>
                        {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword.message}</small>}
                    </div>

                </div>

                <button type="submit" className="btn mt-3 w-100 " style={{background: '#abd373', color: '#fff'}}>update</button>

            </form>
        </div>
    );
}
 
export default ForgottenPasssword;