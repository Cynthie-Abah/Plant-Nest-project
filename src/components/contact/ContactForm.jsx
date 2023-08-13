import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export const ContactForm = () => {


    const schema = yup.object({
        firstname: yup.string().required('First Name is required'),
        lastname: yup.string().required('Last Name is required'),
        phonenumber: yup.number().required('phone Number is required')
        .typeError('Phone number must be a number')
        .test('valid-number', 'Invalid phone number', value => !isNaN('phone Number is required'))
        .required('Phone number is required')
        .positive('Phone number must be positive')
        .integer('Phone number must be an integer'),
        email: yup.string().email('Enter a valid email address').required('Email is required'),
        message: yup.string().required('Message is required'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const handleContactSubmit = (data) => {
        try {
            // Handle form submission here
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form id="contact-form" className="contact-form" action="https://htmlmail.hasthemes.com/mamunur/pronia.php" onSubmit={handleSubmit(handleContactSubmit)}>
            <div className="group-input">
                <div className="form-field me-lg-30 mb-35 mb-lg-0">
                    <input type="text" name="con_firstName" id="con_firstName" placeholder="First Name*" className="input-field" autoComplete="off" {...register('firstname')} />
                    {errors.firstname && <small className="text-danger error-message">{errors.firstname.message}</small>}
                </div>
                <div className="form-field mb-35">
                    <input type="text" name="con_lastName" id="con_lastName" placeholder="Last Name*" className="input-field" autoComplete="off" {...register('lastname')} />
                    {errors.lastname && <small className="text-danger error-message">{errors.lastname.message}</small>}
                </div>
            </div>
            <div className="group-input mb-35">
                <div className="form-field me-lg-30 mb-35 mb-lg-0">
                    <input type="text" name="con_phone" id="con_phone" placeholder="Phone*" className="input-field" autoComplete="off" {...register('phonenumber')} />
                    {errors.phonenumber && <small className="text-danger error-message">{errors.phonenumber.message}</small>}
                </div>
                <div className="form-field">
                    <input type="text" name="con_email" id="con_email" placeholder="Email*" className="input-field" autoComplete="off" {...register('email')} />
                    {errors.email && <small className="text-danger error-message">{errors.email.message}</small>}
                </div>
            </div>
            <div className="form-field mb-5">
                <textarea name="con_message" id="con_message" placeholder="Message" className="textarea-field" {...register('message')}></textarea>
                {errors.message && <small className="text-danger error-message">{errors.message.message}</small>}
            </div>
            <div className="contact-button-wrap">
                <button type="submit" value="submit" className="btn btn btn-custom-size xl-size btn-pronia-primary" name="submit">Post Comment</button>
                <p className="form-messege mb-0"></p>
            </div>
        </form>
    );
};


const Contact = () => {
   

    

    

    return (
        <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit(handleContactSubmit)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" {...register('name')} />
                    {errors.name && <small className="text-danger error-message">{errors.name.message}</small>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register('email')} />
                    {errors.email && <small className="text-danger error-message">{errors.email.message}</small>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="4" {...register('message')} />
                    {errors.message && <small className="text-danger error-message">{errors.message.message}</small>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
