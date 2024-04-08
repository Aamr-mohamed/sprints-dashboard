import React, { useId } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import CryptoJS from "crypto-js";
import * as yup from "yup";
import { Input } from "@material-tailwind/react";
import { customToast } from "../../utils/Toast.js";
import Layout from "../../Layout/Layout";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import User from "@heroicons/react/24/solid/UserIcon";
import Phone from "@heroicons/react/24/solid/PhoneIcon";
import Envelope from "@heroicons/react/24/solid/EnvelopeIcon";
import Home from "@heroicons/react/24/solid/HomeIcon";
import Lock from "@heroicons/react/24/solid/LockClosedIcon";
import ClipLoader from "react-spinners/ClipLoader";

function EditProfile() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const navigate = useNavigate();
  const baseURL = `https://dummyjson.com/users/${userId}`;
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [userId]);
  document.title = "Edit Profile";
  if (loading) {
    return (
      <Layout>
        <ClipLoader
          color={"gray"}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Layout>
    );
  }

  const registerSchema = yup.object().shape({
    fullname: yup
      .string()
      .required("Full name is required")
      .min(2, "First name must be at least 2 characters long")
      .max(50, "First name cannot exceed 50 characters"),
    address: yup.string().required("Address is required"),
    phoneNumber: yup.string().required("Phone number is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
    repassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirming your password is required"),
  });

  const initialValuesSignUp = {
    fullname: user.firstName + " " + user.lastName,
    phoneNumber: user.phone,
    address: user.address.address + " ," + user.address.city,
    email: user.email,
    password: "",
    repassword: "",
  };

  const submitForm = (values) => {
    const { repassword, ...userData } = values;
    try {
      // const users = JSON.parse(localStorage.getItem("users") || "[]")
      // const userFound = users.find((user) => user.email === userData.email)

      // if (userFound) {
      //     customToast("error", "User Already Exists")
      //     return
      // }
      // userData.password = CryptoJS.SHA256(userData.password).toString(CryptoJS.enc.Hex);
      // users.push(userData)
      // localStorage.setItem("users", JSON.stringify(users))

      customToast("success", "User Updated Successfully");
      navigate("/");
    } catch (error) {
      customToast("error", error.messsage);
    }
  };

  if (user) {
    return (
      <Layout>
        <div className="w-full min-h-screen flex justify-center items-center bg-[#f6f9ff]">
          <div className="w-full max-w-md px-9 py-4 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl text-center font-semibold mb-6">
              Edit Profile
            </h1>
            <Formik
              initialValues={initialValuesSignUp}
              validationSchema={registerSchema}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={(values) => {
                submitForm(values);
              }}
            >
              {({ values, errors, touched, handleBlur, handleChange }) => (
                <Form className="space-y-4">
                  <div className="flex flex-col relative">
                    <Input
                      icon={<User className="w-4 h-4 text-black" />}
                      error={Boolean(errors.fullname && touched.fullname)}
                      type="name"
                      name="fullname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fullname}
                      color="black"
                      size="lg"
                      variant="standard"
                      autoComplete="off"
                      label="Full Name"
                    />
                    {errors.fullname && touched.fullname && (
                      <p id="feedback" className="text-red-500 text-xs">
                        {errors.fullname}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col relative">
                    <Input
                      icon={<Home className="w-4 h-4 text-black" />}
                      error={Boolean(errors.address && touched.address)}
                      type="name"
                      name="address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                      color="black"
                      size="lg"
                      variant="standard"
                      autoComplete="off"
                      label="Address"
                    />
                    {errors.address && touched.address && (
                      <p id="feedback" className="text-red-500 text-xs">
                        {errors.address}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col relative">
                    <Input
                      icon={<Phone className="w-4 h-4 text-black" />}
                      error={Boolean(errors.phoneNumber && touched.phoneNumber)}
                      type="tel"
                      name="phoneNumber"
                      placeholder="+201*********"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                      color="black"
                      size="lg"
                      variant="standard"
                      autoComplete="off"
                      label="Phone Number"
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <p id="feedback" className="text-red-500 text-xs">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col relative">
                    <Input
                      icon={<Envelope className="w-4 h-4 text-black" />}
                      error={Boolean(errors.email && touched.email)}
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      color="black"
                      size="lg"
                      variant="standard"
                      autoComplete="off"
                      label="Email"
                    />
                    {errors.email && touched.email && (
                      <p id="feedback" className="text-red-500 text-xs">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col relative">
                    <Input
                      icon={<Lock className="w-4 h-4 text-black" />}
                      error={Boolean(errors.password && touched.password)}
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      color="black"
                      size="lg"
                      variant="standard"
                      autoComplete="off"
                      label="Password"
                    />
                    {errors.password && touched.password && (
                      <p id="feedback" className="text-red-500 text-xs">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col relative">
                    <Input
                      icon={<Lock className="w-4 h-4 text-black" />}
                      error={Boolean(errors.repassword && touched.repassword)}
                      type="password"
                      name="repassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.repassword}
                      color="black"
                      size="lg"
                      variant="standard"
                      autoComplete="off"
                      label="Re-enter Your Password"
                    />
                    {errors.repassword && touched.repassword && (
                      <p id="feedback" className="text-red-500 text-xs">
                        {errors.repassword}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-center mt-7">
                    <button
                      type="submit"
                      className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                    >
                      Update
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <h1>404 User Not Found</h1>
      </Layout>
    );
  }
}

export default EditProfile;

