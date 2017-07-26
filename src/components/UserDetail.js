import React from "react";

function UserDetail(props) {
  const FirstUserDetails = firstUser()
  function firstUser() {
    return (
      <div>
          <p>{props.users[0].id}</p>
          <p>{props.users[0].first_name}</p>
          <p>{props.users[0].last_name}</p>
          <p>{props.users[0].address}</p>
          <p>{props.users[0].phone}</p>
          <p>{props.users[0].occupation}</p>
          <img src={props.users[0].avatar} role="presentation"></img>
      </div>
    );
  };



  return (
    <div>
      <div></div>
    </div>
  )
}

export default UserDetail;
