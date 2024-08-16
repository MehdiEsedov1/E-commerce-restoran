import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Payment() {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phonenumber: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("Required"),
      code: Yup.string()
        .max(16, "Must be 16 characters")
        .min(16, "Must be 16 characters")
        .required("Required"),
      expdate: Yup.string().required("Required"),
      securitycode: Yup.string()
        .max(3, "Must be 3 characters")
        .min(3, "Must be 3 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="payment">
      <form onSubmit={formik.handleSubmit}>
        <div className="personal-info">
          <div className="payment-inputs-container">
            <input
              type="text"
              id="name"
              placeholder="Name and surname"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div style={{ color: "black" }}>{formik.errors.name}</div>
            ) : null}
            <input
              type="e-mail"
              id="email"
              placeholder="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "black" }}>{formik.errors.email}</div>
            ) : null}
            <input
              type="tel"
              id="phonenumber"
              placeholder="Phone number"
              value={formik.values.phonenumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phonenumber && formik.errors.phonenumber ? (
              <div style={{ color: "black" }}>{formik.errors.phonenumber}</div>
            ) : null}
          </div>
          <div className="payment-checkbox-container">
            <input type="checkbox" />
            <p>I accept terms and conditions</p>
          </div>
        </div>
        <div className="card-info">
          <div className="payment-inputs-container">
            <input
              type="text"
              id="name"
              placeholder="Name and surname"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div style={{ color: "black" }}>{formik.errors.name}</div>
            ) : null}
            <input
              type="e-mail"
              id="email"
              placeholder="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "black" }}>{formik.errors.email}</div>
            ) : null}
            <input
              type="tel"
              id="phonenumber"
              placeholder="Phone number"
              value={formik.values.phonenumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phonenumber && formik.errors.phonenumber ? (
              <div style={{ color: "black" }}>{formik.errors.phonenumber}</div>
            ) : null}
          </div>
          <div className="payment-buttons-container">
            <button type="submit" onSubmit={formik.handleSubmit}>
              Confirm order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
