import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SingUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const handleSingup = (data) => {
        console.log(data)
        reset()
    }
    return (
        <div className='h-[650px] flex justify-center items-center'>

            <div className='w-96'>
                <h2 className='text-4xl text-primary font-bold text-center'>Sing up</h2>
                <form onSubmit={handleSubmit(handleSingup)}>
                    {/* form control */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "must added your name"
                        })} placeholder="name" className="input input-bordered w-full " />
                        {errors.name && <p className='text-warning'>{errors.name?.message}</p>}

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: "must added your valid email"
                        })} placeholder="Email" className="input input-bordered w-full " />
                        {errors.email && <p className='text-warning'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "password is required",
                            minLength: { value: 6, message: "your passowrd must be 6 or more charecters" }
                        })} placeholder="password" className="input input-bordered w-full " />

                        {errors.password && <p className='text-warning'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn w-full bg-neutral text-xl my-2 text-primary rounded p-2' value="Sing up" type="submit" />
                </form>
                <label className="label"> <span className="label-text">Already have an Account? <Link className='text-primary font-bold px-4' to="/login">please Login!</Link></span></label>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SingUp;