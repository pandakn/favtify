import React, { useContext } from "react";
import SpotifyContext from "../context/SpotifyContext";

import { formatDate } from "../utils/utils";

import paperTexture from "../assets/bg-paper.jpeg";

const CardInfo = ({ topTracks, cardContainer, handleClick }) => {
  const { userInfo, timeRange } = useContext(SpotifyContext);
  const date = new Date();
  const formattedDate = formatDate(date);

  return (
    <div
      ref={cardContainer}
      className="text-black w-[340px] px-5 h-auto bg-cover flex flex-col items-center justify-center hover:cursor-pointer"
      onClick={handleClick}
      style={{
        backgroundImage: `linear-gradient(rgba(237,231,218, 0.7), rgba(237,231,218, 0.7)), url(${paperTexture})`,
      }}
    >
      <section className="text-center w-full my-4">
        <h1 className="text-3xl font-bold mb-2">Favtify</h1>
        <h3 className="text-lg italic">Owner: {userInfo.display_name}</h3>
        <p className="capitalize italic text-lg">{timeRange.label}</p>
        <p className="italic text-sm">{formattedDate}</p>
      </section>
      {/* track adn artist */}
      <div className="flex flex-col gap-y-5 mb-5">
        {topTracks.map((track) => {
          return (
            <div key={track.id} className="text-center">
              <p className="text-sm pb-1 font-bold">{track.name}</p>
              <p className="text-[12px]">{track.artists[0].name}</p>
            </div>
          );
        })}
      </div>
      <p className="mb-5 text-sm text-center">favtify.vercel.app</p>
    </div>
  );
};

export default CardInfo;
