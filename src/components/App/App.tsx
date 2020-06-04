import React, { useState } from "react";
import "./App.scss";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

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
    </div>
  );
};

export default App;
