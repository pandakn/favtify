import React, { useContext } from "react";
import ReactCardFlip from "react-card-flip";
// components
import CardInfo from "./CardInfo";

// icon
import { TbHandClick } from "react-icons/tb";

import SpotifyContext from "../context/SpotifyContext";

function FlipCard({ isFlipped, handleClick, cardContainer }) {
  const { topTracks, timeRange } = useContext(SpotifyContext);

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped}>
        <div
          className="bg-paper w-[340px] h-[600px] p-8 flex items-center justify-center hover:cursor-pointer"
          onClick={handleClick}
        >
          <section className="">
            <p className="text-white text-2xl font-extrabold capitalize">
              #{timeRange.label}
            </p>
            <p className="flex justify-center items-center text-sm mt-2 text-white font-bold">
              Click Here <TbHandClick className="ml-2 animate-bounce" />
            </p>
          </section>
        </div>
        <CardInfo
          topTracks={topTracks}
          cardContainer={cardContainer}
          handleClick={handleClick}
        />
      </ReactCardFlip>
    </>
  );
}

export default FlipCard;
