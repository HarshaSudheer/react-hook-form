import React from 'react';
import {useForm} from "react-hook-form"
import './App.css';

function App() {
  const {register, handleSubmit, watch, formState: { errors }} = useForm();

  const onSubmit= (data) => {
    console.log(data);
  }

  return (
    <div>
      <h1>React Hook Form</h1>
      <div className='register-form'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            {...register('fname', {
              required: { value: true, message: "First Name is required." }
            })}/><br/>
          {errors.fname && <p className='error-message'> &#9888; {errors.fname.message}</p>}
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            {...register('lname', {
              required: { value: true, message: "Last Name is required." }
            })}/><br/>
          {errors.lname && <p className='error-message'> &#9888; {errors.lname.message}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            {...register('email', {
              required: { value: true, message: "Email is required." } 
            })}/><br/>
          {errors.email && <p className='error-message'> &#9888; {errors.email.message}</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register('password', {
              required: { value: true, message: "Password is required." },
              minLength: { value: 8, message: "Password must be atleast 8 characters." },
              maxLength: { value: 32, message: "Password must not have more than 32 characters." },
              pattern: { value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*#!@$%^&]).{8,32}$/, message: "Password must contain atleast 1 uppercase, 1 lowercase, 1 special character(!@#$%^&*) and 1 digit." }
            })}/><br/>
          {errors.password && <p className='error-message'> &#9888; {errors.password.message}</p>}
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            {...register('confirm_password', {
              required: { value: true, message: "Confirm Password is required." },
              validate: (value) => value === watch('password') || "Passwords does not match."
            })}/><br/>
          {errors.confirm_password && <p className='error-message'> &#9888; {errors.confirm_password.message}</p>}
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default App;
