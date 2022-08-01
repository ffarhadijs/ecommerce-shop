import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextButton from "../buttons/text/TextButton";
const Shipping = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastname: "",
      company: "",
      address: "",
      city: "",
      country: "",
      email: "",
      phone: "",
    },
    onsubmit: () => {
      formik.setValues({
        firstName: "",
        lastname: "",
        company: "",
        address: "",
        city: "",
        country: "",
        email: "",
        phone: "",
      });
      formik.setTouched({}, false);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "Must be 20 characters or less")
        .required("Required"),
      company: Yup.string().max(15, "Must be 25 characters or less"),
      address: Yup.string()
        .max(15, "Must be 50 characters or less")
        .required("Required"),
      city: Yup.string()
        .max(15, "Must be 30 characters or less")
        .required("Required"),
      country: Yup.string()
        .max(15, "Must be 30 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Required"),
      phone: Yup.string().required("Required"),
    }),
  });
  return (
    <div className="p-4 w-full">
      <h1 className="text-slate-800 text-2xl font-bold my-6">
        Shipping Information
      </h1>
      <form
        className="flex flex-col sm:flex-row justify-start items-start sm:items-center flex-wrap"
        onSubmit={formik.handleSubmit}
      >
        <div className="h-24 w-full sm:w-1/2">
          <label
            htmlFor="firstName"
            className="text-gray-600 text-sm font-semibold py-1 block"
          >
            First Name:*
          </label>
          <input
            className="w-5/6 sm:w-4/5 outline-none py-2 px-2 border border-slate-800"
            type="text"
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p className="text-red-500 text-xs font-semibold">
              {formik.errors.firstName}
            </p>
          ) : null}
        </div>
        <div className="h-24 w-full sm:w-1/2">
          <label
            htmlFor="lastName"
            className="text-gray-600 text-sm font-semibold py-1 block"
          >
            Last Name:*
          </label>
          <input
            className="w-5/6 sm:w-4/5 outline-none py-2 px-2 border border-slate-800"
            type="text"
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p className="text-red-500 text-xs font-semibold">
              {formik.errors.lastName}
            </p>
          ) : null}
        </div>
        <div className="h-24 w-full sm:w-1/2">
          <label
            htmlFor="company"
            className="text-gray-600 text-sm font-semibold py-1 block"
          >
            Company Name:
          </label>
          <input
            className="w-5/6 sm:w-4/5 outline-none py-2 px-2 border border-slate-800"
            type="text"
            id="company"
            name="company"
            value={formik.values.company}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.company && formik.errors.company ? (
            <p className="text-red-500 text-xs font-semibold">
              {formik.errors.company}
            </p>
          ) : null}
        </div>
        <div className="h-24 w-full sm:w-1/2">
          <label
            htmlFor="address"
            className="text-gray-600 text-sm font-semibold py-1 block"
          >
            Address:*
          </label>
          <input
            className="w-5/6 sm:w-4/5 outline-none py-2 px-2 border border-slate-800"
            type="text"
            id="address"
            name="address"
            value={formik.values.address}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.address && formik.errors.address ? (
            <p className="text-red-500 text-xs font-semibold">
              {formik.errors.address}
            </p>
          ) : null}
        </div>
        <div className="h-24 w-full sm:w-1/2">
          <label
            htmlFor="city"
            className="text-gray-600 text-sm font-semibold py-1 block "
          >
            City:*
          </label>
          <input
            className="w-5/6 sm:w-4/5 outline-none py-2 px-2 border border-slate-800"
            type="text"
            id="city"
            name="city"
            value={formik.values.city}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.city && formik.errors.city ? (
            <p className="text-red-500 text-xs font-semibold">
              {formik.errors.city}
            </p>
          ) : null}
        </div>
        <div className="h-24 w-full sm:w-1/2">
          <label
            htmlFor="country"
            className="text-gray-600 text-sm font-semibold py-1 block"
          >
            Country:*
          </label>
          <input
            className="w-5/6 sm:w-4/5 outline-none py-2 px-2 border border-slate-800"
            type="text"
            id="country"
            name="country"
            value={formik.values.country}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.country && formik.errors.country ? (
            <p className="text-red-500 text-xs font-semibold">
              {formik.errors.country}
            </p>
          ) : null}
        </div>
        <div className="h-24 w-full sm:w-1/2">
          <label
            htmlFor="email"
            className="text-gray-600 text-sm font-semibold py-1 block"
          >
            Email Address:*
          </label>
          <input
            className="w-5/6 sm:w-4/5 outline-none py-2 px-2 border border-slate-800"
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-xs font-semibold">
              {formik.errors.email}
            </p>
          ) : null}
        </div>
        <div className="h-24 w-full sm:w-1/2">
          <label
            htmlFor="phone"
            className="text-gray-600 text-sm font-semibold py-1 block"
          >
            Phone:*
          </label>
          <input
            className="w-5/6 sm:w-4/5 outline-none py-2 px-2 border border-slate-800"
            type="number"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p className="text-red-500 text-xs font-semibold">
              {formik.errors.phone}
            </p>
          ) : null}
        </div>
        <TextButton text={"Submit"} />
      </form>
    </div>
  );
};

export default Shipping;
