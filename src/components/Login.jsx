import React from "react";
import loginCSS from "../assets/style/login.module.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from 'yup'

function Login() {

   const initialValues ={
    email: '',
    password: ''
   }

   const onSubmit = (values) => {

   }

   const validationSchema = Yup.object({
    email: Yup.string()
    .required("Email is required")
    .email('Invalid email address'),
    password: Yup.string().required('Password is required')
   })
  return (
    <div className={loginCSS.container}>
      <div className={loginCSS.background}>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {() => (
            <Form>
              <div className="field">
                <Field name="email" placeholder="Email" />
                <div className="error">
                  <ErrorMessage name="email" component="span" />
                </div>
              </div>
              <div className="field">
            <Field name="password" placeholder="Password" />
            <div className="error">
              <ErrorMessage name="password" component="span"  type='password'/>
            </div>
          </div>
          <button>Submit</button>
            </Form>
          )}
          
        </Formik>
      </div>
    </div>
  );
}

export default Login;
