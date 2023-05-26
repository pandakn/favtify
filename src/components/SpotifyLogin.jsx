import React, { useContext } from "react";

import SpotifyContext from "../context/SpotifyContext";

import { BsSpotify } from "react-icons/bs";

function SpotifyLogin() {
  const { handleLogin } = useContext(SpotifyContext);

  return (
    <button
      className=" flex items-center gap-2 text-brownPrimary border-2 border-dashed border-brownPrimary text-[12px] font-bold px-6 py-3 rounded-lg mt-2"
      onClick={handleLogin}
    >
      Login with Spotify <BsSpotify className="w-5 h-5" />
    </button>
  );
}

export default SpotifyLogin;
