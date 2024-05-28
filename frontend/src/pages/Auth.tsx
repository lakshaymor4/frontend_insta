import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAuth = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(0);
  const [profile_pic, setProfile] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUSername] = useState("");

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setFlag(0);
      navigate("/login");
      return;
    }

    const config = {
      method: "get",
      url: "http://localhost:3000/",
      headers: {
        authorization: token,
      },
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
        if (response.data.isLoggedIn === false) {
          setFlag(0);
          navigate("/login");
        } else {
          setProfile(response.data.profile_pic);
          localStorage.setItem("profile_pic", response.data.profile_pic);
          setFullname(response.data.fullname);
          setUSername(response.data.username);
          setFlag(1);
        }
      })
      .catch((error) => {
        console.error(error);
        navigate("/login");
      });
  };

  const handleLogout = (e: any) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return { flag, profile_pic, fullname, username, handleLogout };
};

export default useAuth;
