import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Getapp from "./gettheapp";
import L_s from "./login_sign";
import axios from "axios";
import { useLocation } from "react-router-dom";
const Birthday = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const location = useLocation();
  const data = location.state;
  const [flag, setFlag] = useState(0);
  const handle_next = () => {
    const dob = day + month + year;
    const final_data = {
      email: data.email,
      password: data.password,
      username: data.username,
      fullname: data.fullname,
      birth: dob,
    };
    navigate("/email", { state: final_data });
    const con = {
      method: "post",
      data: {
        email: data.email,
      },
      url: "http://localhost:3000/otp",
    };
    axios(con)
      .then((resu) => console.log("Success"))
      .catch((res) => console.log(res));
  };
  var birth_year: number = 0;
  const b_month = (e: any) => {
    setMonth(e.target.value);
  };
  const b_date = (e: any) => {
    setDay(e.target.value);
  };
  const b_year = (e: any) => {
    birth_year = e.target.value;
    setYear(e.target.value);
    if (currentDate.getFullYear() - birth_year >= 7) {
      setFlag(1);
    } else {
      setFlag(0);
    }
  };

  useEffect(() => {
    setCurrentDate(new Date());

    const currentMonth = currentDate.getMonth() + 1;

    if (currentMonth === 1) {
      setMonth("January");
    } else if (currentMonth === 2) {
      setMonth("February");
    } else if (currentMonth === 3) {
      setMonth("March");
    } else if (currentMonth === 4) {
      setMonth("April");
    } else if (currentMonth === 5) {
      setMonth("May");
    } else if (currentMonth === 6) {
      setMonth("June");
    } else if (currentMonth === 7) {
      setMonth("July");
    } else if (currentMonth === 8) {
      setMonth("August");
    } else if (currentMonth === 9) {
      setMonth("September");
    } else if (currentMonth === 10) {
      setMonth("October");
    } else if (currentMonth === 11) {
      setMonth("November");
    } else if (currentMonth === 12) {
      setMonth("December");
    }
    setDay(currentDate.getDate().toString());
  }, []);
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-[21.875rem] flex flex-col items-center  sm:border-[0.1rem] pt-2 mt-2">
          <div className=" max-w-[10.938rem]  mt-8 overflow-hidden">
            <img src="src/assets/birthday.png" alt="" className="w-[9rem]" />
          </div>
          <div>
            <p className="font-semibold mt-2 mb-2 text-[0.9rem]">
              Add Your Birthday
            </p>
          </div>
          <div className="text-[0.9rem]">
            <text className="mb-0">
              This won't be a part of your public profile.
            </text>
          </div>
          <div>
            <a href="/" className="text-[0.9rem] text-[#0095F6]">
              Why do I need to provide my birthday?
            </a>
          </div>
          <div className="flex flex-row text-[#737373] justify-between mt-2 mb-2">
            <div className="border-[0.1rem] outline-0 text-sm">
              <select
                className=" w-[5.708rem] outline-0 pl-1 pt-1 pb-1 text-[0.85rem]"
                id="kl"
                value={month}
                onChange={b_month}
              >
                <option value="1">January</option>
                <option value="2">Feburary</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div className="border-[0.1rem] ml-2 mr-2 pt-1 pb-1 text-[0.85rem]">
              <select value={day} onChange={b_date}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </div>
            <div className="border-[0.1rem]">
              <select
                className="pt-1 pb-1 text-[0.85rem]"
                value={year}
                onChange={b_year}
              >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
                <option value="1939">1939</option>
                <option value="1938">1938</option>
                <option value="1937">1937</option>
                <option value="1936">1936</option>
                <option value="1935">1935</option>
                <option value="1934">1934</option>
                <option value="1933">1933</option>
                <option value="1932">1932</option>
                <option value="1931">1931</option>
                <option value="1930">1930</option>
                <option value="1929">1929</option>
                <option value="1928">1928</option>
                <option value="1927">1927</option>
                <option value="1926">1926</option>
                <option value="1925">1925</option>
                <option value="1924">1924</option>
              </select>
            </div>
          </div>
          {flag == 0 ? (
            <div className="text-[#737373] text-[0.8rem] mb-4">
              <p>You need to enter the date you were born</p>
            </div>
          ) : (
            <></>
          )}
          <div className="text-[#737373] w-[18.292rem] text-[0.7rem] text-center">
            <p>
              Use your own birthday, even if this account is for a business, a
              pet, or something else
            </p>
          </div>
          <div className="mt-4">
            {flag == 0 ? (
              <button
                type="submit"
                className="w-[16.792rem] font-medium border-white border-2 bg-[#4CB5F9] text-white rounded-[0.7rem] pt-[0.3rem] pb-[0.3rem]"
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
                onClick={handle_next}
              >
                Next
              </button>
            )}
          </div>
          <div className="mt-2 mb-4">
            <a
              href="/signup"
              className="text-[#0095F6] font-semibold text-center"
            >
              Go back
            </a>
          </div>
        </div>
        <L_s text=" Have an account?" lin="login" lin_text="Log in" />
        <Getapp />
      </div>
    </>
  );
};

export default Birthday;
