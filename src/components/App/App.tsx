import React, { useState } from "react";
import "./App.scss";
import "../../variables.scss";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Jumbotron from "../Jumbotron";
import About from "../About";
import Users from "../Users";
import RegistrationForm from "../RegistrationForm";
import Footer from "../Footer";

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
      <Users />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default App;
