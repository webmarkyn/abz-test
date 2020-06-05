import React, { useRef } from "react";

import "./Sidebar.scss";

import { ReactComponent as ReactLogo } from "../../assets/logo.svg";

type Props = {
  menuActive: boolean;
  handleMenuActiveChange: (value: boolean) => void;
};

const Sidebar = ({ menuActive, handleMenuActiveChange }: Props) => {
  const handleWrapperClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.nativeEvent.target === wrapperEl.current) {
      handleMenuActiveChange(false);
    }
  };

  const wrapperEl = useRef<null | HTMLDivElement>(null);

  return (
    <div
      className={`sidebar-wrapper d-lg-none ${menuActive ? "active" : ""}`}
      ref={wrapperEl}
      onClick={handleWrapperClick}
    >
      <nav className="sidebar col-10 col-sm-6 col-md-4 ">
        <a href="#" className="sidebar-logo">
          <ReactLogo />
        </a>
        <ul className="sidebar-menu-section flex-column nav">
          <li className="sidebar-menu-section-item">
            <a href="#">About me</a>
          </li>
          <li className="sidebar-menu-section-item">
            <a href="#">Relationships</a>
          </li>
          <li className="sidebar-menu-section-item">
            <a href="#">Users</a>
          </li>
          <li className="sidebar-menu-section-item">
            <a href="#">Sign Up</a>
          </li>
          <li className="sidebar-menu-section-item">
            <a href="#">Terms and Conditions</a>
          </li>
        </ul>
        <ul className="sidebar-menu-section flex-column nav">
          <li className="sidebar-menu-section-item">
            <a href="#">How it works</a>
          </li>
          <li className="sidebar-menu-section-item">
            <a href="#">Partnership</a>
          </li>
          <li className="sidebar-menu-section-item">
            <a href="#">Help</a>
          </li>
          <li className="sidebar-menu-section-item">
            <a href="#">Leave testimonial</a>
          </li>
          <li className="sidebar-menu-section-item">
            <a href="#">Contact us</a>
          </li>
        </ul>
        <ul className="sidebar-menu-section flex-column nav">
          <li className="sidebar-menu-section-item">
            <a href="#">Articles</a>
          </li>
          <li className="sidebar-menu-section-item">
            <a href="#">Our news</a>
          </li>
          <li className="sidebar-menu-section-item">
            <a href="#">Testimonials</a>
          </li>
          <li className="sidebar-menu-section-item">
            <a href="#">Licenses</a>
          </li>
          <li className="sidebar-menu-section-item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
