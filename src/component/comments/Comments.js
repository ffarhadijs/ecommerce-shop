import React, { useState, useEffect } from "react";

import { AiOutlineClockCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import TextButton from "../buttons/text/TextButton";
import { comments } from "../../data/dummyData";



const Comments = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      comment: Yup.string()
        .max(100, "Must be 50 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid Email address")
        .required("Required"),
    }),
    onSubmit: () => {
      const newComment = {
        id: Math.floor(Math.random() * 10000),
        name: formik.values.name,
        email: formik.values.email,
        comment: formik.values.comment,
        date: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
      };
      setComment([...comment, newComment]);
      formik.setValues({ name: "", email: "", comment: "" });
      formik.setTouched({}, false);
    },
  });
  const [comment, setComment] = useState(() => {
    const savedComment = localStorage.getItem("comment");
    if (savedComment) {
      return JSON.parse(savedComment);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("comment", JSON.stringify(comment));
  }, [comment]);

  return (
    <div className="bg-white w-full flex flex-col justify-center items-center">
      <div className="bg-white w-5/6 flex flex-col justify-center items-start mx-auto border-b-2">
        <span className="text-slate-800 font-bold text-xl py-10">Comments</span>
        {comments.map((comment) => (
          <div className="w-2/3 flex flex-row justify-center items-center border p-4 mx-auto my-4" key={comment.id}>
            <div className="w-1/5 p-4 ">
              <img src={comment.img} alt="comments profile img" className="rounded-full" />
            </div>
            <div className="flex flex-col justify-center items-start p-4 w-4/5">
              <div className="flex flex-row justify-start items-center py-2">
                <span className="text-slate-800 text-lg font-semibold">
                  {comment.name}
                </span>
                <div className="mx-4 flex flex-row justify-center items-center">
                  <AiOutlineClockCircle />
                  <span className="font-bold text-slate-800">
                    {comment.date}
                  </span>
                </div>
              </div>
              <span className=" text-gray-500 text-sm">{comment.email}</span>
              <p className="text-gray-700 leading-6 py-2 w-full">
                Crack commando unit was sent to prison by a military court for a
                crime they didn't commit. ese men promptly escaped from a
                maximum security stockade to the Los Angeles.
              </p>
            </div>
          </div>
        ))}
        {comment.map((cm) => (
          <div className="w-2/3 flex flex-row justify-center items-center border p-4 mx-auto my-4" key={cm.id}>
            <div className="w-1/5 p-4 text-7xl flex flex-row justify-center items-center">
              <FaUserCircle className="mx-0 px-0 text-gray-600" />
            </div>
            <div className="flex flex-col justify-center items-start p-4 w-4/5">
              <div className="flex flex-row justify-start items-center py-2">
                <span className="text-slate-800 text-lg font-semibold">
                  {cm.name}
                </span>
                <div className="mx-4 flex flex-row justify-center items-center">
                  <AiOutlineClockCircle />
                  <span className="font-bold text-slate-800">{cm.date}</span>
                </div>
              </div>
              <span className=" text-gray-500 text-sm">{cm.email}</span>
              <p className="text-gray-700 leading-6 py-2 w-full flex flex-row flex-wrap">
                {cm.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white w-5/6 mx-auto">
        <h2 className="text-slate-800 font-bold text-xl pt-10">
          Post your comment
        </h2>
        <form
          className="flex flex-col justify-center items-start py-10"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-row justify-start items-center w-2/3 mx-auto">
            <div className="w-1/2 mx-4 h-12">
              <label className="text-sm" htmlFor="name">
                Name:*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                className=" w-full border outline-none p-2"
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-red-600 text-xs py-1">
                  {formik.errors.name}
                </p>
              ) : null}
            </div>
            <div className="w-1/2 mx-4 h-12">
              <label htmlFor="email" className="text-sm">
                E-mail:*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                className=" w-full border outline-none p-2 "
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-600 text-xs py-1">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
          </div>
          <div className="w-2/3 mx-auto my-10">
            <label htmlFor="comment" className="text-sm">
              Comment:*
            </label>
            <textarea
              value={formik.values.comment}
              id="comment"
              className=" resize-none w-full h-40 max-h-60 mx-auto border p-2 outline-none"
              name="comment"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.comment && formik.errors.comment ? (
              <p className="text-red-600 text-xs py-1">
                {formik.errors.comment}
              </p>
            ) : null}
          </div>
          <div className="inline mx-auto">
            <TextButton text={"Submit Comment"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;
