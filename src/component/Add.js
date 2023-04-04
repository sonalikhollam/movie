// import React,{ useEffect } from 'react'
// import { Formik,Form,Field } from 'formik';
// import * as Yup from 'yup';
// import crudnewObj from './services/Crudnewservice.js';
// import { useNavigate } from 'react-router-dom';

// const SignupSchema =Yup.object().shape(
//   {
//     name:Yup.string().min(2,"Minimum Name Length:2").max(20,"Maximum Name Length:20").required('Required'),
//     mobile_no:Yup.number().positive().required('Required'),
//     email_id:Yup.string().email('Invalid email').required('Required'),
//     user_pwd:Yup.string().required('Required'),
//     user_type:Yup.string().required('Required')
//   }
//  );

// export default function Add() {
//  let navigate = useNavigate();
//   return (
//     <div class="container">
//     <h1>Add Record</h1>
//     <Formik 
//     initialValues={{
//       name: '',
//       mobile_no: '',
//       email_id: '',
//       user_pwd:'',
//       user_type:'',
//     }}
//     validationSchema={SignupSchema}
//     onSubmit={ values => {
//       console.log(values);
//       crudnewObj
//       .insertData("/CRMAppointment/register",values)
//       .then(val=>{
//         console.log(val);
//         navigate("/show");
//       })
//       .catch(err=>{
//         console.log(err);
//       })
//     }}
//     >
//     {({ errors,touched }) => (

  
//     <Form>
// <Field name="name" placeholder="Enter Name" />
// {errors.name && touched.name ? (<div>{errors.name}</div>) : null}<br/>
// <Field name="mobile_no" placeholder="Enter Mobile No" />
// {errors.mobile_no && touched.mobile_no ? (<div>{errors.mobile_no}</div>) : null}<br/>

// <Field name="email_id" placeholder="Enter Email" />
// {errors.email_id && touched.email_id ? (<div>{errors.email_id}</div>) : null}<br/>

// <Field name="user_pwd" placeholder="Enter Password" />
// {errors.user_pwd && touched.user_pwd ? (<div>{errors.user_pwd}</div>) : null}<br/>

// <Field name="user_type" placeholder="Enter User Type" />
// {errors.user_type && touched.user_type ? (<div>{errors.user_type}</div>) : null}<br/>

// <button type="submit">submit</button>
//    </Form>
//     )}
//     </Formik>
//     </div>
//   )
// }
