import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "./Auth";
import Sidebar from "./sidebar";
const Homepage = () => {
  const { flag, profile_pic, fullname, username, handleLogout } = useAuth();
  return (
    <div>
      {flag == 0 ? (
        <div>First Log in!!!</div>
      ) : (
        <>
          <div className="bg-black h-screen text-white flex flex-row justify-between">
            <Sidebar />
            <div>
              <div className="flex flex-col  w-[23.938rem]">
                <div className="flex flex-row bg-black w-full pt-10 pl-[4rem] justify-between">
                  <div className="flex flex-row">
                    <img
                      src={profile_pic}
                      className="w-[2.75rem] h-[2.75rem]"
                    />
                    <div className="flex flex-col pl-4">
                      <text>{username}</text>
                      <text className="text-[#A8A8A8] ">{fullname}</text>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="text-[#0095F6] pr-8 mt-4 text-sm"
                    >
                      Switch
                    </button>
                  </div>
                </div>
                <div className="flex flex-row bg-black w-full pt-10 pl-[4rem] justify-between">
                  <div className="w-[7.287rem] ">
                    <p className="font-semibold text-sm text-[#A8A8A8]">
                      Suggested for you
                    </p>
                  </div>
                  <div>
                    <p className="text-white pr-8 text-xs font-semibold">
                      See All
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Homepage;
