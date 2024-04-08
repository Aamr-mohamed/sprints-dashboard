import React from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { customToast } from "../../utils/Toast";
import { Input } from "@material-tailwind/react";
import Lock from "@heroicons/react/24/solid/LockClosedIcon";
import EnvelopeIcon from "@heroicons/react/24/solid/EnvelopeIcon";
import CryptoJS from "crypto-js";
import { useAuth } from "../../utils/context";

function Login() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });

  const initialValuesLogin = {
    email: "",
    password: "",
  };

  const submitForm = (values) => {
    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]"); // get user from localstorage if its null makes it empty array
      const userFound = users.find((user) => user.email === values.email); // search for user based on email

      if (userFound) {
        const hashedInputPassword = CryptoJS.SHA256(values.password).toString(
          CryptoJS.enc.Hex,
        );
        if (userFound.password === hashedInputPassword) {
          let user = {
            fullname: userFound.fullname,
            email: userFound.email,
            phoneNumber: userFound.phoneNumber,
            address: userFound.address,
            country: userFound.country,
            id: userFound.id,
          };
          localStorage.setItem("user", JSON.stringify(user)); // sets another item in localstorage as user to use it later in the project as current user
          setIsAuthenticated(true);
          customToast("success", "User Logged In Successfully", navigate("/"));
        } else {
          customToast("error", "Wrong Password Please Re-enter Your Password");
        }
      } else {
        customToast("error", "User Not Found Please Register");
      }
    } catch (error) {
      customToast("error", error.messsage);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#f6f9ff]">
      <div className="w-full max-w-md px-9 py-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl text-center font-semibold mb-6">Login</h1>
        <Formik
          initialValues={initialValuesLogin}
          validationSchema={loginSchema}
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
                  icon={<EnvelopeIcon className="w-4 h-4 text-black" />}
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

              <div className="flex justify-center mt-7">
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Login
                </button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Dont have an Account?{" "}
                  <a href="/signup" className="text-blue-500 font-semibold">
                    Register
                  </a>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
