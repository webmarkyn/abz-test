import React from "react";
import { ReactComponent as ReactLogo } from "../../assets/logo.svg";
import { ReactComponent as ReactMenu } from "./assets/menu.svg";

import "./Navbar.scss";

type Props = {
  handleMenuActiveChange: (value: boolean) => void;
};

const Navbar = ({ handleMenuActiveChange }: Props) => (
  <nav className="navbar navbar-default navbar-fixed-top navbar-expand-lg">
    <a href="#" className="navbar-brand">
      <ReactLogo />
    </a>
    <button
      className="navbar-toggler collapsed"
      onClick={() => handleMenuActiveChange(true)}
    >
      <ReactMenu />
    </button>
  </nav>
);

export default Navbar;
