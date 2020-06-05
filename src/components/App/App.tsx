import React, { useState } from "react";
import "./App.scss";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Jumbotron from "../Jumbotron";
import About from "../About";

const App = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuActiveChange = (value: boolean) => {
    setMenuActive(value);
  };

  return (
    <div className="App">
      <Navbar handleMenuActiveChange={handleMenuActiveChange} />
      <Sidebar
        handleMenuActiveChange={handleMenuActiveChange}
        menuActive={menuActive}
      />
      <Jumbotron />
      <About />
    </div>
  );
};

export default App;
