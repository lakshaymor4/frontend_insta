import React from "react";

const Footer = ({ name, link }: { name: string; link: string }) => {
  return (
    <>
      <a href={link} className="text-[#737373] text-[0.75rem] hover:underline">
        {name}
      </a>
    </>
  );
};

export default Footer;
