import React from "react";

import "./Users.scss";
import { User, Users as UsersData } from "../../lib/types";

import avatar from "./assets/avatar.png";

type Props = {
  users: UsersData;
  incrementPage: () => void;
};

const Users = ({
  users: { loading, data, error, end },
  incrementPage,
}: Props) => {
  const userItems = (data: User[]) => {
    return data.map((user) => (
      <div className="col-12 col-md-4 users-list-item" key={user.id}>
        <div className="user-avatar">
          <img src={user.photo || avatar} alt="user-avatar" />
        </div>
        <h2 className="user-name">{user.name}</h2>
        <div className="user-info">
          <p className="user-position">{user.position}</p>
          <p className="user-email">
            <span className="email-short">{user.email}</span>
            <span className="tooltip-custom">{user.email}</span>
          </p>
          <p className="user-phone">{user.phone}</p>
        </div>
      </div>
    ));
  };

  const currentState = () => {
    if (loading) return <h2 className="text-center">Loading...</h2>;
    if (error) return <h2 className="text-center text-danger">Error</h2>;
    return userItems(data);
  };
  return (
    <div className="users">
      <div className="container text-center">
        <h1>Our cheerful users</h1>
        <p>Attention! Sorting users by registration date</p>
        <div className="row users-list">{currentState()}</div>
        <button className="btn btn-cta" onClick={incrementPage} disabled={end}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default Users;
