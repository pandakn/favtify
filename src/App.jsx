import React from "react";
// Component
import Home from "./pages/Home";
import { SpotifyProvider } from "./context/SpotifyContext";
import Footer from "./components/Footer";

function App() {
  return (
    <SpotifyProvider>
      <Home />
      <Footer />
    </SpotifyProvider>
  );
}

export default App;
