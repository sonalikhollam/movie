import React from 'react'
import { useForm } from "react-hook-form";
import crudObj from './services/Crudservice';

export default function Register()
{
  const{register,handleSubmit,formState: { errors }} = useForm();
  const doSubmit = (formData)=>{
    console.log(formData);
    console.log(crudObj);
    crudObj.insertData("reg-action",formData);
  }
  return (
    <div className='container'>
    <h1>Register Component</h1>
  <form onSubmit={handleSubmit(doSubmit) }>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">User Name</label>
    <input {...register("username" ,{required:true})} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errors.username?.type==='required' && "User Name is required"}
    </div>
    <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">User Mobile</label>
    <input {...register("usermobile" ,{required:true})} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errors.usermobile?.type==='required' && "usermobile is required"}
    </div>
    <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">User Email</label>
    <input {...register("useremail" ,{required:true})} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {errors.useremail?.type==='required' && "useremail is required"}
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
