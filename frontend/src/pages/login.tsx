import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer_link";
import axios from "axios";
import Getapp from "./gettheapp";
import L_s from "./login_sign";
const Login = () => {
  const navigate = useNavigate();
  const [pass, setPass] = useState("");
  const [user, Setuser] = useState("");
  const [flag, setFlag] = useState(0);
  const handle_pass = (e: any) => {
    setPass(e.target.value);
    if (pass.length >= 8 && user.length > 0) {
      setFlag(1);
    }
  };
  const handle_user = (e: any) => {
    Setuser(e.target.value);
    if (pass.length >= 8 && user.length > 0) {
      setFlag(1);
    }
  };
  const handle_submit = (e: any) => {
    e.preventDefault();
    const pattern_email = /.+@.+/;
    const pattern_number = /^\d+[0-9]\d+$/;
    const pattern_username = /^\w+\w[.]*[!]*\w+$/;
    const result_email = user.match(pattern_email);
    const result_number = user.match(pattern_number);
    const result_username = user.match(pattern_username);
    if (result_email) {
      console.log("email");
      const con = {
        method: "post",
        url: "http://localhost:3000/login",
        data: {
          email: user,
          password: pass,
        },
      };
      axios(con).then((resu) => {
        localStorage.setItem("token", resu.data.token);
        navigate("/");
      });
    } else if (result_number) {
      console.log("number");
      const con = {
        method: "post",
        url: "http://localhost:3000/login",
        data: {
          mobile: parseInt(user, 10),
          password: pass,
        },
      };
      axios(con).then((resu) => {
        localStorage.setItem("token", resu.data.token);
        navigate("/");
      });
    } else if (result_username) {
      console.log("username");
      const con = {
        method: "post",
        url: "http://localhost:3000/login",
        data: {
          username: user,
          password: pass,
        },
      };
      axios(con).then((resu) => {
        localStorage.setItem("token", resu.data.token);
        console.log(resu.data);
        navigate("/");
      });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center sm:mt-[2rem] ">
        <div className=" flex flex-col items-center pb-4 pt-[0.625rem] sm:border-[0.1rem] pt-12 mt-2 ">
          <div className="max-h-[3.188rem] max-w-[10.938rem] mt-8 overflow-hidden">
            <img src="src/assets/instagram.png" alt="" className="" />
          </div>
          <div className="flex flex-col mt-8">
            <div className="w-[16.8rem] border-[0.1rem] bg-[#FAFAFA] outline-transparent rounded-[0.2rem] ">
              <input
                type="text"
                placeholder="Phone number, username, or email"
                onChange={handle_user}
                className="w-[16.23rem] pt-[0.563rem] pb-[0.438rem] bg-[#FAFAFA] outline-0 pl-[0.5rem] text-[0.82rem]  placeholder:text-gray-500 text-[0.82rem]  "
              />
            </div>
            <div className="w-[16.8rem] rounded-[0.2rem] bg-[#FAFAFA] mt-1 border-[0.1rem] ">
              <input
                type="password"
                placeholder="Password"
                onChange={handle_pass}
                className="w-[16.23rem]  pt-[0.563rem] pb-[0.438rem] pl-[0.5rem] bg-[#FAFAFA] outline-0 text-[0.82rem] placeholder:text-gray-500 placeholder:text-[0.82rem]"
              />
            </div>
          </div>
          <div className="mx-[2.5rem] my-[0.8rem]">
            {flag == 0 ? (
              <button
                type="submit"
                className="w-[16.792rem] font-medium border-white border-2 bg-[#4CB5F9] text-white rounded-[0.7rem] pt-[0.3rem] pb-[0.3rem]"
                id="login"
                disabled
              >
                Log in
              </button>
            ) : (
              <button
                type="submit"
                className="w-[16.792rem] font-medium border-white border-2 bg-[#0095F6] text-white rounded-[0.7rem] pt-[0.3rem] pb-[0.3rem]"
                id="login"
                onClick={handle_submit}
              >
                Log in
              </button>
            )}
          </div>
          <div className="flex flex-row">
            <div className="border-t-[0.1rem] w-[6.711rem] mt-[0.6rem] mr-2"></div>
            <div className="text-[0.813rem] text-[#737373]">OR</div>
            <div className="border-t-[0.1rem] w-[6.711rem] mt-[0.6rem] ml-2"></div>
          </div>
          <div className="flex flex-row justify-center mt-6">
            <div className="pt-[0.3rem] ">
              <img src="src/assets/facebook.png" alt="" className="w-4 h-4" />
            </div>

            <a
              href="/"
              className="text-[#385185] text-center font-semibold pl-2   "
            >
              Log in with Facebook
            </a>
          </div>
          <div className="text-[#00376b] text-[0.719rem] mt-4">
            <a href="/" className="text-[#00376B] ">
              Forgot Password?
            </a>
          </div>
        </div>
        <L_s text="Don't have an account?" lin="signup" lin_text="Sign Up" />
        <Getapp />
      </div>
      {/* <div>
        <div className="flex flex-row justify-between items-center">
          <Footer name="Meta" link="https://about.meta.com/" />
          <Footer name="About" link="https://about.instagram.com/" />
          <Footer name="Blog" link="https://about.instagram.com/blog/" />
          <Footer name="Jobs" link="https://www.instagram.com/about/jobs/" />
          <Footer name="Help" link="https://help.instagram.com/" />
          <Footer
            name="API"
            link="https://developers.facebook.com/docs/instagram"
          />
          <Footer
            name="Privacy"
            link="https://www.instagram.com/legal/privacy/"
          />
          <Footer name="Meta" link="https://about.meta.com/" />
          <Footer name="Meta" link="https://about.meta.com/" />
          <Footer name="Meta" link="https://about.meta.com/" />
          <Footer name="Meta" link="https://about.meta.com/" />
          <Footer name="Meta" link="https://about.meta.com/" />
          <Footer name="Meta" link="https://about.meta.com/" />
          <Footer name="Meta" link="https://about.meta.com/" />
        </div>
      </div> */}
    </>
  );
};

export default Login;
