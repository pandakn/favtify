import React, { useContext } from "react";
import SpotifyContext from "../context/SpotifyContext";

import { formatDate } from "../utils/utils";

import paperTexture from "../assets/bg-paper.jpeg";
import { BsSpotify } from "react-icons/bs";

const CardInfo = ({ topTracks, cardContainer }) => {
  const { userInfo, timeRange } = useContext(SpotifyContext);
  const date = new Date();
  const formattedDate = formatDate(date);

  return (
    <div
      ref={cardContainer}
      className="text-black w-[340px] px-5 h-auto bg-cover flex flex-col items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(237,231,218, 0.7), rgba(237,231,218, 0.7)), url(${paperTexture})`,
      }}
    >
      <section className="text-center w-full my-4">
        <div className="flex justify-center items-center text-2xl mb-2">
          <a href="https://open.spotify.com/" target="_blank">
            <BsSpotify className="h-10 w-10" />
          </a>
        </div>
        <h1 className="text-3xl font-bold mb-2">Favtify</h1>
        <h3 className="text-lg italic">Owner: {userInfo.display_name}</h3>
        <p className="capitalize italic text-lg">{timeRange.label}</p>
        <p className="italic text-sm">{formattedDate}</p>
      </section>
      {/* track adn artist */}
      <div className="flex flex-col gap-y-5 mb-5">
        {topTracks.map((track) => {
          return (
            <a
              href={track.external_urls.spotify}
              target="_blank"
              key={track.id}
              className="text-center"
            >
              <p className="text-sm pb-1 font-bold">{track.name}</p>
              <p className="text-[12px]">{track.artists[0].name}</p>
            </a>
          );
        })}
      </div>
      <p className="mb-5 text-sm text-center">favtify.vercel.app</p>
    </div>
  );
};

export default CardInfo;
