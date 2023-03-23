import { createContext, useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const SpotifyContext = createContext();

const spotifyApi = new SpotifyWebApi();

export const SpotifyProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [topTracks, setTopTracks] = useState([]);
  const [timeRange, setTimeRange] = useState({
    value: "short_term",
    label: "last month",
  });

  const handleLogin = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID_KEY;
    const redirectUri =
      import.meta.env.VITE_REDIRECT_URI || "http://localhost:5173/callback"; //replace your redirect uri

    const scopes = ["user-top-read", "user-read-private", "user-read-email"];

    const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      "%20"
    )}&response_type=code`;

    window.location = url;
  };

  const handleCallback = () => {
    const hash = window.location.hash
      .substring(1)
      .split("&")
      .reduce(function (initial, item) {
        if (item) {
          const parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});

    window.location.hash = "";

    let _token = hash.access_token;

    if (_token) {
      spotifyApi.setAccessToken(_token);

      spotifyApi.getMe().then((data) => {
        setUserInfo(data);
        setLoggedIn(!loggedIn);
      });
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const selectedIndex = e.target.selectedIndex;
    const label = e.target[selectedIndex].label;
    setTimeRange({ value: value, label: label });
  };

  const getTopTracks = () => {
    spotifyApi
      .getMyTopTracks({ time_range: timeRange.value, limit: 9 })
      .then((track) => {
        console.log("top tracks ", track.items);
        setTopTracks(track.items);
      });
  };

  useEffect(() => {
    if (window.location.hash) {
      handleCallback();
    }

    loggedIn && getTopTracks();
  }, [timeRange, loggedIn]);

  return (
    <SpotifyContext.Provider
      value={{
        handleLogin,
        userInfo,
        topTracks,
        loggedIn,
        timeRange,
        handleChange,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyContext;
