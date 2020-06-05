import React from "react";
import { ReactComponent as ReactLogo } from "../../assets/logo.svg";
import { ReactComponent as ReactMenu } from "./assets/menu.svg";

import "./Navbar.scss";

type Props = {
  handleMenuActiveChange: (value: boolean) => void;
};

const Navbar = ({ handleMenuActiveChange }: Props) => (
  <nav className="navbar navbar-default fixed-top navbar-expand-lg">
    <div className="container">
      <a href="#" className="navbar-brand">
        <ReactLogo />
      </a>
      <button
        className="navbar-toggler collapsed"
        onClick={() => handleMenuActiveChange(true)}
      >
        <ReactMenu />
      </button>
    </div>
  </nav>
);

export default Navbar;
