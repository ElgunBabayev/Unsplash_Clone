import React from "react";
import signupCSS from "../assets/style/signup.module.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";



function SignUp() {

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const validationSchema = Yup.object({
    username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required("Username is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'),''], "Password must match").required('Required')
  });
  const onSubmit = (values) => {
    console.log(values)
  };


  return (
    <div className={signupCSS.container}>
      <div className={signupCSS.background}>
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
          {() => (
            
              <Form className={signupCSS.form}>
                  <div className={signupCSS.field}>
                  <div className={signupCSS.label}>Username</div>
                  <Field
                    className={signupCSS.einput}
                    name="username"
                    placeholder="Username"
                  />
                  <div className={signupCSS.error}>
                    <ErrorMessage name="username" component="span" />
                  </div>
                </div>
                <div className={signupCSS.field}>
                  <div className={signupCSS.label}>Email</div>
                  <Field
                    className={signupCSS.einput}
                    name="email"
                    type= "email"
                    placeholder="Email"
                  />
                  <div className={signupCSS.error}>
                    <ErrorMessage name="email" component="span" />
                  </div>
                </div>
                <div className={signupCSS.field}>
                  <div className={signupCSS.label}>Password</div>
                  <Field
                    className={signupCSS.einput}
                    name="password"
                    type= "password"
                    placeholder="Password"
                  />
                  <div className={signupCSS.error}>
                    <ErrorMessage name="password" component="span" />
                  </div>
                </div>
                <div className={signupCSS.field}>
                  <div className={signupCSS.label}>Confirm password</div>
                  <Field
                    className={signupCSS.einput}
                    name="confirmPassword"
                    type= "password"
                    placeholder="Confirm password"
                  />
                  <div className={signupCSS.error}>
                    <ErrorMessage name="confirmPassword" component="span" />
                  </div>
                </div>
                <button className={signupCSS.submitbtn}>Sign up</button>
                <span className={signupCSS.anyacc}>
                Already have an account?{" "}
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <span className={signupCSS.signup}>Login</span>
                  </Link>
                </span>
              </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SignUp;
