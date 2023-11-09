import React from "react";
import ReactDOM from "react-dom/client";
import { Formik } from "formik";
import * as Yup from "yup";
// import "./styles.css";

const SignupForm = () => {
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("Required"),
                lastName: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("Required"),
                email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
            })}
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="error">{formik.errors.firstName}</div>
                    ) : null}

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="error">{formik.errors.lastName}</div>
                    ) : null}

                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="error">{formik.errors.email}</div>
                    ) : null}

                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik>
    );
};

function App() {
    return <SignupForm />;
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
