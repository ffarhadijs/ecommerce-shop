import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import TextButton from "../buttons/text/TextButton";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    onSubmit: () => {
      formik.setValues({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      formik.setTouched({}, false);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid Email address")
        .required("Required"),
      phone: Yup.string()
        .max(12, "Must be 12 characters or less")
        .required("Required"),
      subject: Yup.string().max(25, "Must be 25 characters or less"),
      message: Yup.string()
        .max(100, "Must be 50 charactrs or less")
        .required("Required"),
    }),
  });
  return (
    <div>
      <div className="w-5/6 mx-auto py-10 ">
        <h1 className="text-xl text-slate-800 font-bold mb-8">
          Keep in Touch With Us
        </h1>

        <div className="flex flex-col md:flex-row justify-start items-start">
          <div className=" w-full md:w-2/3">
            <form
              className="w-full flex flex-col sm:flex-row justify-between mx-auto items-start sm:items-center flex-wrap"
              onSubmit={formik.handleSubmit}
            >
              <div className="w-full sm:w-1/2 h-24 flex flex-col justify-start items-start">
                <label
                  htmlFor="name"
                  className="text-gray-700 text-xs font-semibold py-2"
                >
                  Full Name:*
                </label>
                <input
                  className="w-full sm:w-5/6 border outline-none px-3 py-2 border-slate-800"
                  type="text"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-red-600 text-xs font-semibold">
                    {formik.errors.name}
                  </p>
                ) : null}
              </div>
              <div className="w-full sm:w-1/2 h-24 flex flex-col justify-start items-start">
                <label
                  htmlFor="email"
                  className="text-gray-700 text-xs font-semibold py-2"
                >
                  Email:*
                </label>
                <input
                  className="w-full sm:w-5/6 border outline-none px-3 py-2 border-slate-800"
                  name="email"
                  id="email"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-600 text-xs font-semibold">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>
              <div className="w-full sm:w-1/2 h-24 flex flex-col justify-start items-start">
                <label
                  htmlFor="phone"
                  className="text-gray-700 text-xs font-semibold py-2"
                >
                  Phone:*
                </label>
                <input
                  className="w-full sm:w-5/6 border outline-none px-3 py-2 border-slate-800"
                  type="number"
                  id="phone"
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <p className="text-red-600 text-xs font-semibold">
                    {formik.errors.phone}
                  </p>
                ) : null}
              </div>
              <div className="w-full sm:w-1/2 h-24 flex flex-col justify-start items-start">
                <label
                  htmlFor="subject"
                  className="text-gray-700 text-xs font-semibold py-2"
                >
                  Subject:
                </label>
                <input
                  className="w-full sm:w-5/6 border outline-none px-3 py-2 border-slate-800"
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.subject && formik.errors.subject ? (
                  <p className="text-red-600 text-xs font-semibold">
                    {formik.errors.subject}
                  </p>
                ) : null}
              </div>
              <div className="w-full h-36 flex flex-col justify-start items-start mb-4">
                <label
                  htmlFor="message"
                  className="text-gray-700 text-xs font-semibold py-2"
                >
                  Message:*
                </label>
                <textarea
                  className="w-full sm:w-5/6 border outline-none px-3 py-2 border-slate-800 resize-none h-24"
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.message && formik.errors.message ? (
                  <p className="text-red-600 text-xs font-semibold">
                    {formik.errors.message}
                  </p>
                ) : null}
              </div>
              <TextButton text={"Send Email"} type="submit"/>
            </form>
          </div>
          <div className="w-full md:w-1/3 border border-yellow-400 flex flex-col justify-start items-start justify-items-stretch p-6 my-8 md:my-0">
            <h3 className="text-gray-800 font-semibold py-2">Our Address</h3>
            <div className=" flex flex-row justify-start items-center py-2">
              <div className="text-3xl text-gray-600 font-semibold w-10 flex flex-row justify-center items-center"> <MdOutlineLocationOn/> </div>
              <div className="px-4">
              <p className="text-gray-700 text-sm py-1">Street No. 12, Newyork 12, </p>
              <p className=" text-gray-700 text-sm py-1">MD - 123, USA.</p>
              </div>
            </div>
            <div className="py-2 flex flex-row justify-start items-center">
              <div className="text-2xl text-gray-600 font-semibold w-10 flex flex-row justify-center items-center"> <FiPhone/> </div>
              <p className=" text-gray-700 text-sm px-4"> 1.800.123.456789 </p>
            </div>
            <div className="py-2 flex flex-row justify-start items-center">
              <div className="text-2xl text-gray-600 font-semibold w-10 flex flex-row justify-center items-center"> <MdOutlineMail/> </div>
              <p className=" text-gray-700 text-sm px-4"> info@ecoshop.com </p>
            </div>
            <div className=" py-2">
              <p className="text-gray-700 text-sm px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                erat turpis, pellentesque non leo eget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
