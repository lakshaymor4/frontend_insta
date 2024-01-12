import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Getapp from "./gettheapp";
import L_s from "./login_sign";
const Email = () => {
  const navigate = useNavigate();
  var conf_code = "";
  const [flag, setFlag] = useState(0);
  const [code, setCode] = useState(0);
  const location = useLocation();
  const data = location.state;
  const handle_register = () => {
    const con = {
      method: "post",
      url: "http://localhost:3000/signup",
      data: {
        username: data.username,
        email: data.email,
        password: data.password,
        fullname: data.fullname,
        birth: data.birth,
        otp: code,
      },
    };
    axios(con)
      .then((resu) => {
        localStorage.setItem("token", resu.data.token);
        navigate("/");
      })
      .catch((resu) => console.log(resu));
  };
  const handle_code = (e: any) => {
    setCode(e.target.value);
    conf_code = e.target.value;
    if (conf_code.length == 6) {
      setFlag(1);
    } else {
      setFlag(0);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="w-[21.875rem] flex flex-col items-center  sm:border-[0.1rem] pt-2 mt-2">
        <div className=" max-w-[10.938rem]  mt-8 overflow-hidden">
          <img src="src/assets/emial.png" alt="" className="w-[5.75rem]" />
        </div>
        <div>
          <p className="font-semibold mt-2 mb-2 text-[0.9rem]">
            Enter Confirmation Code
          </p>
        </div>
        <div className="w-[18.292rem]">
          <p>
            Enter the confirmation code we sent to {data.email}.
            <button type="submit" className="text-[#0095f6] font-semibold">
              Resend Code.
            </button>
          </p>
        </div>
        <div className="w-[16.8rem] border-[0.1rem] bg-[#FAFAFA] outline-transparent rounded-[0.2rem] mb-2 mt-[2rem]">
          <input
            type="text"
            placeholder="Confirmation Code"
            onChange={handle_code}
            className="w-[16.23rem]  pt-[0.563rem] pb-[0.438rem] bg-[#FAFAFA] outline-0 pl-[0.5rem] text-[0.82rem]  placeholder:text-gray-500 text-[0.82rem]  "
          />
        </div>
        <div className="mt-4">
          {flag == 0 ? (
            <button
              type="submit"
              className="w-[16.792rem] font-medium border-white border-2 bg-[#B2DFFC] text-white rounded-[0.7rem] pt-[0.3rem] pb-[0.3rem]"
              id="login"
              disabled
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="w-[16.792rem] font-medium border-white border-2 bg-[#0095F6] text-white rounded-[0.7rem] pt-[0.3rem] pb-[0.3rem]"
              id="login"
              onClick={handle_register}
            >
              Next
            </button>
          )}
        </div>
        <div className="mt-2 mb-4">
          <a
            href="/birthday"
            className="text-[#0095F6] font-semibold text-center"
          >
            Go back
          </a>
        </div>
      </div>
      <L_s text=" Have an account?" lin="login" lin_text="Log in" />
      <Getapp />
    </div>
  );
};

export default Email;
