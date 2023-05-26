import React, { useContext, useState } from "react";
import SpotifyContext from "../context/SpotifyContext";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCoffeeTogo } from "react-icons/bi";
import SupportModal from "./SupportModal";

const Footer = () => {
  const { loggedIn } = useContext(SpotifyContext);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleClick = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <>
      <div
        className={`${
          loggedIn ? "" : "fixed w-full bottom-16 left-1/2 -translate-x-1/2"
        }`}
      >
        <div className="text-center flex flex-col gap-2 justify-center items-center mb-10">
          <div className="flex gap-2 justify-center text-sm items-center mb-2">
            Made by <AiOutlineHeart />
            <a
              href="https://github.com/pandakn"
              target="_blank"
              // className="text-blue-400"
              className="text-brownPrimary hover:underline"
            >
              Natthawut Klangyod
              {/* Pandakn */}
            </a>
          </div>
          {/* <div className="flex items-center justify-center gap-2 text-brownPrimary">
            <button
              onClick={handleClick}
              className="capitalize hover:underline text-sm "
            >
              Support Me
            </button>
            <BiCoffeeTogo />
          </div> */}
          {/* modal */}
        </div>
      </div>
      {/* {isShowModal && <SupportModal handleClick={handleClick} />} */}
    </>
  );
};

export default Footer;
