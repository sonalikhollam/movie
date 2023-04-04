import React from 'react'
import { useForm } from "react-hook-form";
export default function Login()
{
  const{register,handleSubmit,formState: { errors }} = useForm();
  const doSubmit = (formData)=>{
    console.log(formData);
  }
  return (
    <div className='container'>
    <h1>Login Component</h1>
  <form onSubmit={handleSubmit(doSubmit) }>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email Id</label>
    <input {...register("email id" ,{required:true})} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errors.emailid?.type==='required' && "Email Id is required"}
    </div>
   <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">User Password</label>
    <input {...register("userpassword" ,{required:true,minLength:4,maxLength:8})} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div>
{errors.userpassword?.type === 'required' && "User Password Is Required"}
{errors.userpassword?.type === 'minLength' && "User Password Min:4"}
{errors.userpassword?.type === 'maxLength' && "User Password Max:8"}


    </div>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
  )
}
