import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const handleLogin = data => {
        console.log(data)
        reset();
    }

    return (
        <div className='h-[650px] flex justify-center items-center'>

            <div className='w-96'>
                <h2 className='text-4xl text-primary font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    {/* form control */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: "Email Address is required"
                        })} placeholder="Email" className="input input-bordered w-full " />
                        {errors.email && <p className='text-warning'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "password is required",
                            minLength: { value: 6, message: "your password must be 6 six charecter or more" }
                        })} placeholder="password" className="input input-bordered w-full " />
                        <label className="label"> <span className="label-text">Forget Password</span></label>
                        {errors.password && <p className='text-warning'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn w-full bg-neutral text-xl my-2 text-primary rounded p-2' value="Login" type="submit" />
                </form>
                <label className="label"> <span className="label-text">New to Doctors portal? <Link className='text-primary font-bold px-4' to="/singup">Create New Account?</Link></span></label>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;