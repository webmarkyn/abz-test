import React from "react";

import "./Users.scss";
import avatar from "./assets/avatar.png";

const Users = () => (
  <div className="users">
    <div className="container text-center">
      <h1>Our cheerful users</h1>
      <p>Attention! Sorting users by registration date</p>
      <div className="row users-list">
        <div className="col-12 users-list-item">
          <div className="user-avatar">
            <img src={avatar} alt="user-avatar" />
          </div>
          <h2 className="user-name">Maximillian</h2>
          <div className="user-info">
            <p className="user-position">
              Leading specialist of the Control Department
            </p>
            <p className="user-email">controldepartment@gmail</p>
            <p className="user-phone">+380 50 678 03 24</p>
          </div>
        </div>
        <div className="col-12 users-list-item">
          <div className="user-avatar">
            <img src={avatar} alt="user-avatar" />
          </div>
          <h2 className="user-name">
            Adolph Blaine Charles David Earl Matthew Matthew
          </h2>
          <div className="user-info">
            <p className="user-position">Contextual advertising specialist</p>
            <p className="user-email">adolph.blainecharles@gmail.com</p>
            <p className="user-phone">+380 50 678 03 24</p>
          </div>
        </div>
        <div className="col-12 users-list-item">
          <div className="user-avatar">
            <img src={avatar} alt="user-avatar" />
          </div>
          <h2 className="user-name">Elizabeth</h2>
          <div className="user-info">
            <p className="user-position">Frontend developer</p>
            <p className="user-email">elisabet.front@gmail.com</p>
            <p className="user-phone">+380 50 678 03 24</p>
          </div>
        </div>
      </div>
      <button className="btn btn-cta">Show more</button>
    </div>
  </div>
);

export default Users;
