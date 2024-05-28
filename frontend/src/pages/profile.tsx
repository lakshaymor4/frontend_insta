import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./sidebar";
import { useParams } from "react-router-dom";
import { set } from "firebase/database";
const Profile = () => {
  const params = useParams<{ username?: string }>();

  const [img, setImg] = useState("");
  const [isTrue, setTrue] = useState(0);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetch_data = async () => {
      const con = {
        method: "get",
        url: "http://localhost:3000/",
        headers: {
          authorization: token,
        },
      };
      await axios(con).then((resu: any) => {
        console.log(resu.data);
        if (params.username == resu.data.username) {
          setTrue(1);
          setImg(resu.data.profile_pic);
        } else {
          setTrue(0);
        }
      });
    };
    fetch_data();
  }, [params.username]);
  return (
    <div className="bg-black h-screen text-white flex flex-row ">
      <Sidebar />
      <div>
        {isTrue ? (
          <>
            <div className="mt-[2rem] w-full">
              <div className="flex flex-row justify-evenly pl-[4rem]   w-[58.438rem]">
                <div className="w-[9.375rem] h-[9.375rem]">
                  <img src={img} alt="profile" />
                </div>
                <div className="w-[38.333rem]">
                  <div className="flex flex-row ">
                    <h1 className="text-[1.25rem]"> {params.username}</h1>
                    <div className="bg-[#363636] pl-[1rem] pr-[1rem] h-[2rem] w-[6.341rem] text-sm flex flex-row items-center rounded-[0.5rem] ml-[2rem] mr-[0.5rem]">
                      <button className="">Edit profile</button>
                    </div>
                    <div className="bg-[#363636] pl-[1rem] pr-[1rem] h-[2rem] w-[6.982rem] text-sm flex flex-row items-center rounded-[0.5rem]">
                      <button>View archive</button>
                    </div>
                  </div>
                  <div className="flex flex-row justify-evenly">
                    <div>0 post</div>
                    <div>7 followers</div>
                    <div>19 following</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h1>Not Logged in:{params.username}</h1>
        )}
      </div>
    </div>
  );
};
export default Profile;
