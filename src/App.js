import React from "react";
import ReactDOM from "react-dom/client";
import { useFormik } from "formik";
// import "./styles.css";

const SignupForm = () => {
    const formik = useFormik({
        initialValues: { email: "" },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

function App() {
    return <SignupForm />;
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
