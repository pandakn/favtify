import React from "react";

import PromptPay from "../assets/PromptPay.png";
import { BiCoffeeTogo } from "react-icons/bi";

const SupportModal = ({ handleClick }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl p-2">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5">
              <h3 className="text-xl ">Support Me</h3>
              <button className="" onClick={handleClick}>
                <span className="text-gray-900 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  X
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto flex flex-col justify-center items-center">
              <div className="flex justify-center items-center gap-2 bg-brownPrimary bg-opacity-20 rounded-lg px-4 py-2 shadow">
                <BiCoffeeTogo />
                {/* <p className="text-sm">Buy me a coffee</p> */}
                <a href="https://ko-fi.com/pandakn" target="_blank">
                  Buy me a coffee
                </a>
              </div>
              <p className="my-3 text-lg">or</p>
              <div className="max-w-[200px]">
                <p className="text-lg mb-3 text-center">Prompt Pay</p>
                <img src={PromptPay} alt="PromptPay" className="w-full" />
              </div>
              <p className="my-4 text-slate-500 text-sm leading-relaxed">
                Thank you for the support! 🎉
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default SupportModal;
