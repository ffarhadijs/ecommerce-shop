import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

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

        <div className="flex flex-row-reverse justify-start items-start">
          <div className="w-1/3 border border-yellow-400 flex flex-col justify-start items-start justify-items-stretch">
            <h3>our Address</h3>
            <div>
              <div> <MdOutlineLocationOn/> </div>
              <p>Street No. 12, Newyork 12, </p>
              <p>MD - 123, USA.</p>
            </div>
            <div>
              <div> <FiPhone/> </div>
              <p> 1.800.123.456789 </p>
            </div>
            <div>
              <div> <MdOutlineMail/> </div>
              <p> info@ecoshop.com </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                erat turpis, pellentesque non leo eget.
              </p>
            </div>
          </div>
          <div className="w-2/3">
            <form
              className="w-full flex flex-row justify-between mx-auto items-center flex-wrap"
              onSubmit={formik.handleSubmit}
            >
              <div className="w-1/2 h-24 flex flex-col justify-start items-start">
                <label
                  htmlFor="name"
                  className="text-gray-700 text-xs font-semibold py-2"
                >
                  Full Name:*
                </label>
                <input
                  className="w-11/12 border outline-none px-3 py-2 border-slate-800"
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
              <div className="w-1/2 h-24 flex flex-col justify-start items-start">
                <label
                  htmlFor="email"
                  className="text-gray-700 text-xs font-semibold py-2"
                >
                  Email:*
                </label>
                <input
                  className="w-11/12 border outline-none px-3 py-2 border-slate-800"
                  name="email"
                  id="email"
                  type="email"
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
              <div className="w-1/2 h-24 flex flex-col justify-start items-start">
                <label
                  htmlFor="phone"
                  className="text-gray-700 text-xs font-semibold py-2"
                >
                  Phone:*
                </label>
                <input
                  className="w-11/12 border outline-none px-3 py-2 border-slate-800"
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
              <div className="w-1/2 h-24 flex flex-col justify-start items-start">
                <label
                  htmlFor="subject"
                  className="text-gray-700 text-xs font-semibold py-2"
                >
                  Subject:
                </label>
                <input
                  className="w-11/12 border outline-none px-3 py-2 border-slate-800"
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
              <div className="w-full h-36 flex flex-col justify-start items-start mx-auto">
                <label
                  htmlFor="message"
                  className="text-gray-700 text-xs font-semibold py-2"
                >
                  Message:*
                </label>
                <textarea
                  className="w-3/4 border outline-none px-3 py-2 border-slate-800 resize-none h-24"
                  type="text"
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.message && formik.errors.message ? (
                  <p className="text-red-600 text-xs font-semibold">
                    {formik.errors.message}
                  </p>
                ) : null}
              </div>
              <button
                type="submit"
                className=" bg-slate-800 py-3 px-4 font-medium text-gray-50 hover:bg-yellow-300 hover:text-slate-800 my-10 outline-none"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;