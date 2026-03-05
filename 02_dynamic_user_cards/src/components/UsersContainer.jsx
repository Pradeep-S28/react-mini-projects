import React from "react";
import User from "./User";

const UsersContainer = ({ usersData }) => {
  console.log(usersData);
  return (
    <>
      <div className="users-container">
        {usersData.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </>
  );
};

export default UsersContainer;
