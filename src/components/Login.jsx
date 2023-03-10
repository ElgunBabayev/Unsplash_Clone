import React from "react";
import loginCSS from "../assets/style/login.module.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values)
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <div className={loginCSS.container}>
      <div className={loginCSS.background}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <Form className={loginCSS.form}>
              <div className={loginCSS.field}>
              <div className={loginCSS.label}>Email</div>
                <Field
                  className={loginCSS.einput}
                  name="email"
                  placeholder="Email"
                />
                <div className={loginCSS.error}>
                  <ErrorMessage name="email" component="span" />
                </div>
              </div>
              <div className={loginCSS.field}>
                <div className={loginCSS.label}>Password</div>
                <Field
                  className={loginCSS.einput}
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <div className={loginCSS.error}>
                  <ErrorMessage
                    name="password"
                    component="span"
                  />
                </div>
              </div>
              <button className={loginCSS.submitbtn}>Login</button>
              <span className={loginCSS.anyacc}>Don't have an account? <Link to='/signup'style={{textDecoration: 'none'}} ><span className={loginCSS.signup}>Sign up</span></Link></span>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
