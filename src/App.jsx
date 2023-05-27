import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Themes from "./Components/Themes/Themes";

function App() {
  return (
    <>
      <Header />
      <Themes />
      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default App;
