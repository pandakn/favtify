import React, { useContext, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
// components
import SpotifyLogin from "../components/SpotifyLogin";
import Dropdown from "../components/Dropdown";
import FlipCard from "../components/FlipCard";
import Button from "../components/Button";

import SpotifyContext from "../context/SpotifyContext";

import { downloadImage, logout } from "../utils/utils";

const wordForFun = [
  "Curious about your most played song on Spotify?",
  1000,
  "Ready to explore? Hit the button!",
  1000,
  "Share it with your friends - don't keep it to yourself!",
  1000,
];

const Home = () => {
  const { loggedIn } = useContext(SpotifyContext);
  const [isFlipped, setIsFlipped] = useState(false);
  const cardContainer = useRef(null);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="container mx-auto overflow-x-hidden scrollbar-hide">
      {/* <BackgroundAnimate /> */}
      {!loggedIn ? (
        <div className=" flex flex-col justify-center items-center h-screen">
          <section className="text-center mb-3">
            <h1 className="text-5xl mb-4 tracking-widest font-pixelPrimary">
              Favtify
            </h1>
            <TypeAnimation
              sequence={wordForFun}
              speed={50}
              className="text-sm lg:text-lg px-3 text-gray-700"
              repeat={Infinity}
            />
          </section>
          <SpotifyLogin />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-x-16 my-5">
          {/* card */}
          <div className="flex flex-col items-center my-4 overflow-hidden">
            <Dropdown />
            <FlipCard
              handleClick={handleFlip}
              isFlipped={isFlipped}
              cardContainer={cardContainer}
            />

            {/* Button Download and Logout */}
            {isFlipped && (
              <Button
                label="download"
                handleClick={() => downloadImage(cardContainer.current)}
              >
                download image
              </Button>
            )}
            <Button label="logout" handleClick={logout}>
              logout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
