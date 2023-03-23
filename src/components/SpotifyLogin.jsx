import React, { useContext } from "react";

import SpotifyContext from "../context/SpotifyContext";

function SpotifyLogin() {
  const { handleLogin } = useContext(SpotifyContext);

  return (
    <button
      className=" text-brownPrimary border-2 border-dashed border-brownPrimary text-[12px] font-bold px-6 py-3 rounded-lg mt-2"
      onClick={handleLogin}
    >
      Login with Spotify
    </button>
  );
}

export default SpotifyLogin;
