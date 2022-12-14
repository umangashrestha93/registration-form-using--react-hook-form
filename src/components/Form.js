import React from 'react'
import { useForm } from 'react-hook-form'

function Form() {
    const {register, handleSubmit,watch,formState:{errors}} = useForm()
    const onSubmit = data => console.log(data)

  return (
    <section>
    <div className='register'>
        <div className='col-1'>
            <h2>Sign in</h2>
            <span>register and enjoy the services</span>
            <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <div className='col-1'>
                    <input type='text' {...register("username", {required: true})} placeholder='username'></input>
                    {errors.username?.type === "required" && "enter your username"}
                    <br></br>
                    <input type='text' {...register("mobilenumber",{required:true})}placeholder='mobile number'></input>
                    {errors.mobilenumber?.type === "required" && "Enter your mobile number"}
                    <br></br>
                    <input type='text' {...register('password',{required:true})}placeholder='password'></input>
                    {errors.password?.type === "required" && "enter the password"}
                    <br></br>
                    <input type='text' {...register("confirmpassword",{required : true})}placeholder='confirm password'></input>
                    {errors.confirmpassword?.type === "required" && "feild is empty"}
                </div>

                <div className='col-2'></div>
                <button>Sign Up</button>




            </form>

        </div>
    </div>
    </section>
  )
}

export default Form
