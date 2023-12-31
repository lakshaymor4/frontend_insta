import React from "react";
import { useState } from "react";
import axios from "axios";
import Getapp from "./gettheapp";
import L_s from "./login_sign";
const Signup = () => {
  const [flag, setFlag] = useState(0);
  const [numorem, setnumorem] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const [name, setName] = useState("");

  const handle_num = (e: any) => {
    setnumorem(e.target.value);
    if (
      password.length > 8 &&
      username.length > 0 &&
      name.length > 0 &&
      numorem.length > 0
    ) {
      setFlag(1);
    }
  };
  const handle_name = (e: any) => {
    setName(e.target.value);
    if (
      password.length > 8 &&
      username.length > 0 &&
      name.length > 0 &&
      numorem.length > 0
    ) {
      setFlag(1);
    }
  };
  const handle_user = (e: any) => {
    setUsername(e.target.value);
    if (
      password.length > 8 &&
      username.length > 0 &&
      name.length > 0 &&
      numorem.length > 0
    ) {
      setFlag(1);
    }
  };
  const handle_pass = (e: any) => {
    setPass(e.target.value);
    if (
      password.length > 8 &&
      username.length > 0 &&
      name.length > 0 &&
      numorem.length > 0
    ) {
      setFlag(1);
    }
  };
  const handle_register = (e: any) => {
    e.preventDefault();
    const pattern_email = /.+@.+/;
    const pattern_number = /^\d+[0-9]\d+$/;
    const result_email = numorem.match(pattern_email);
    const result_number = numorem.match(pattern_number);
    if (result_email) {
      console.log("email");
      const con = {
        method: "post",
        url: "http://localhost:3000/signup",
        data: {
          email: numorem,
          password: password,
          username: username,
          fullname: name,
        },
      };
      axios(con).then((resu) => localStorage.setItem("token", resu.data.token));
    } else if (result_number) {
      console.log("number");
      const con = {
        method: "post",
        url: "http://localhost:3000/signup",
        data: {
          mobile: parseInt(numorem, 10),
          password: password,
          username: username,
          fullname: name,
        },
      };
      axios(con).then((resu) => localStorage.setItem("token", resu.data.token));
    }
  };
  return (
    <>
      <div className="flex flex-col items-center">
        <div className=" w-[21.875rem] flex flex-col  items-center  sm:border-[0.1rem] pt-12 mt-2 ">
          <div className="max-h-[3.188rem] max-w-[10.938rem]  mt-8 overflow-hidden">
            <img src="src/assets/instagram.png" alt="" className="" />
          </div>
          <div className="text-center">
            <p className="text-[#7A7A7A] text-[1rem] font-semibold w-[16.792rem] mt-4 mb-4 ">
              Sign up to see photos and videos from yourt friends
            </p>
          </div>
          <div className="bg-[#0095F6] w-[16.792rem] mb-2 flex flex-row justify-center pl-[1rem]  pr-[1rem] pt-[0.1em] pb-[0.1rem] rounded-[0.5rem]">
            <div className="">
              {" "}
              <img
                src="src/assets/facebo.png"
                alt=""
                className="w-[1.2rem] mt-[0.2rem] "
              />
            </div>
            <p className="text-white ">Log in with facebook</p>
          </div>
          <div className="flex flex-row mb-2">
            <div className="border-t-[0.1rem] w-[6.711rem] mt-[0.6rem] mr-2"></div>
            <div className="text-[0.813rem] text-[#737373]">OR</div>
            <div className="border-t-[0.1rem] w-[6.711rem] mt-[0.6rem] ml-2"></div>
          </div>

          <div>
            <div className="w-[16.8rem] border-[0.1rem] bg-[#FAFAFA] outline-transparent rounded-[0.2rem] mb-2 ">
              <input
                type="text"
                placeholder="Mobile number or email"
                onChange={handle_num}
                className="w-[16.23rem] pt-[0.563rem] pb-[0.438rem] bg-[#FAFAFA] outline-0 pl-[0.5rem] text-[0.82rem]  placeholder:text-gray-500 text-[0.82rem]  "
              />
            </div>
            <div className="w-[16.8rem] mb-2 border-[0.1rem] bg-[#FAFAFA] outline-transparent rounded-[0.2rem] ">
              <input
                type="text"
                placeholder="Full Name"
                onChange={handle_name}
                className="w-[16.23rem] pt-[0.563rem] pb-[0.438rem] bg-[#FAFAFA] outline-0 pl-[0.5rem] text-[0.82rem]  placeholder:text-gray-500 text-[0.82rem]  "
              />
            </div>
            <div className="w-[16.8rem] mb-2 border-[0.1rem] bg-[#FAFAFA] outline-transparent rounded-[0.2rem] ">
              <input
                type="text"
                placeholder="Username"
                onChange={handle_user}
                className="w-[16.23rem] pt-[0.563rem] pb-[0.438rem] bg-[#FAFAFA] outline-0 pl-[0.5rem] text-[0.82rem]  placeholder:text-gray-500 text-[0.82rem]  "
              />
            </div>
            <div className="w-[16.8rem] mb-2 border-[0.1rem] bg-[#FAFAFA] outline-transparent rounded-[0.2rem] ">
              <input
                type="password"
                placeholder="Password"
                onChange={handle_pass}
                className="w-[16.23rem] pt-[0.563rem] pb-[0.438rem] bg-[#FAFAFA] outline-0 pl-[0.5rem] text-[0.82rem]  placeholder:text-gray-500 text-[0.82rem]  "
              />
            </div>
          </div>
          <div className="w-[16.778rem] text-xs text-[#737373]">
            People who use our service may have uploaded your contact
            information to Instagram.{" "}
            <a href="/" className="text-[#00376B]">
              Learn More
            </a>
          </div>
          <div className="text-[#737373] text-xs w-[16.778rem] text-center mt-4">
            By signing up, you agree to our{" "}
            <a href="/" className="text-[#00376B]">
              {" "}
              Terms
            </a>{" "}
            ,{" "}
            <a href="/" className="text-[#00376B]">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/" className="text-[#00376B]">
              Cookies Policy
            </a>{" "}
            .
          </div>
          <div className="mt-2 mb-8">
            {flag == 0 ? (
              <button
                type="submit"
                className="w-[16.792rem] font-medium border-white border-2 bg-[#4CB5F9] text-white rounded-[0.7rem] pt-[0.3rem] pb-[0.3rem]"
                id="login"
                disabled
              >
                Sign up
              </button>
            ) : (
              <button
                type="submit"
                className="w-[16.792rem] font-medium border-white border-2 bg-[#0095F6] text-white rounded-[0.7rem] pt-[0.3rem] pb-[0.3rem]"
                id="login"
                onClick={handle_register}
              >
                Sign up
              </button>
            )}
          </div>
        </div>
        <L_s text=" Have an account?" lin="login" lin_text="Log in" />
        <Getapp />
      </div>
    </>
  );
};

export default Signup;
