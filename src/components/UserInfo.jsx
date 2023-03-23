import React, { useContext } from "react";
import SpotifyContext from "../context/SpotifyContext";

const UserInfo = () => {
  const { userInfo } = useContext(SpotifyContext);

  return (
    <div className="flex justify-center items-center gap-5 px-4 w-[340px]">
      <img
        className="w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full mt-4 bg-center"
        src={userInfo.images[0].url}
        alt={userInfo.display_name}
      />
      <div className="flex flex-col">
        <h1 className="text-xl md:2xl lg:text-3xl tracking-wide font-bold break-all">
          Hey 👋, {userInfo.display_name}
        </h1>
      </div>
    </div>
  );
};

export default UserInfo;
