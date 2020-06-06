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
      <ul className="navbar-nav ml-auto d-none d-lg-flex">
        <li className="nav-item active">
          <a href="#" className="nav-link">
            About me
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Relationships
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Requirements
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Users
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Sign up
          </a>
        </li>
      </ul>
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
