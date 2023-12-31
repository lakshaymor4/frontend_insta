import React from "react";

const Getapp = () => {
  return (
    <div className="flex flex-col justify-between items-center ">
      <p className="mt-2 text-[0.87rem]">Get the app.</p>
      <div className="flex flex-row mt-[0.3rem]  ">
        <img
          src="src/assets/playstore.png"
          alt=""
          className="w-[8.393rem] h-[2.5rem] pr-[0.5rem]"
        />
        <img
          src="src/assets/microsoft.png"
          alt=""
          className="w-[6.923rem] h-[2.5rem]"
        />
      </div>
    </div>
  );
};
export default Getapp;
