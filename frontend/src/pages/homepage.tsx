import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Homepage = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(0);
  const handle_logout = (e: any) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/login");
  };
  useEffect(() => {
    const con = {
      method: "get",
      url: "http://localhost:3000/",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    axios(con).then((resu: any) => {
      console.log(resu.data);
      if (resu.data.isLoggedIn == false) {
        setFlag(0);
        navigate("/login");
      } else {
        setFlag(1);
      }
    });
  }, []);
  return (
    <div>
      {flag == 0 ? (
        <div>First Log in!!!</div>
      ) : (
        <div>
          <p>Welcome!!!!</p>
          <div>
            <button onClick={handle_logout}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Homepage;
