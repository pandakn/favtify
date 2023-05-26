import { createContext, useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
const SpotifyContext = createContext();

const spotifyApi = new SpotifyWebApi();

const AUTH_URL = "https://accounts.spotify.com/authorize";
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID_KEY;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET_KEY;
const REDIRECT_URI =
  import.meta.env.VITE_REDIRECT_URI || "http://localhost:5173/callback"; //replace your redirect uri

const SCOPES = ["user-read-private", "user-top-read"];

export const SpotifyProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [topTracks, setTopTracks] = useState([]);
  const [timeRange, setTimeRange] = useState({
    value: "short_term",
    label: "last month",
  });

  const handleLogin = () => {
    const queryParams = new URLSearchParams({
      response_type: "code",
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      scope: SCOPES.join("%20"),
    });

    const authUrl = `${AUTH_URL}?${queryParams.toString()}`;
    window.location.href = authUrl;
  };

  const handleTokenExchange = async (code) => {
    const tokenUrl = "https://accounts.spotify.com/api/token";
    const bodyParams = new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    });

    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: bodyParams.toString(),
    });

    const data = await response.json();
    const _token = await data.access_token;
    setToken(_token);

    if (_token) {
      spotifyApi.setAccessToken(_token);
      const user = await spotifyApi.getMe();
      setUserInfo(user);
      setLoggedIn(!loggedIn);
    }
  };

  const handleCallback = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const code = urlSearchParams.get("code");

    if (code) {
      handleTokenExchange(code);
      window.history.replaceState({}, null, "/");
    }
  };

  const getTopTracks = () => {
    spotifyApi
      .getMyTopTracks({ time_range: timeRange.value, limit: 9 })
      .then((track) => {
        // console.log("top tracks ", track.items);
        setTopTracks(track.items);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const selectedIndex = e.target.selectedIndex;
    const label = e.target[selectedIndex].label;
    setTimeRange({ value: value, label: label });
  };

  useEffect(() => {
    token ? getTopTracks() : handleCallback();
  }, [timeRange, loggedIn, token]);

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
