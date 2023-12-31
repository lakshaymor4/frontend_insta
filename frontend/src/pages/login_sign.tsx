import React from "react";

const L_s = ({
  text,
  lin,
  lin_text,
}: {
  text: string;
  lin: string;
  lin_text: string;
}) => {
  const linn: string = "/" + lin;
  return (
    <>
      <div className=" mt-[0.5rem]  w-[21.875rem] h-[3.896rem] sm:border-[0.1rem] ">
        <div className="m-[0.938rem] text-center text-[0.875rem]  ">
          <text>{text}</text>
          <a href={linn} className="text-[#0095F6] font-semibold ml-1">
            {lin_text}
          </a>
        </div>
      </div>
    </>
  );
};
export default L_s;
