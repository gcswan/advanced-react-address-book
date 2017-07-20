import React from "react";



function ListOfUsers(props) {
  const userDivs = props.users.map((user) => {
    return (
      <div key={user.id}>
        <ul>
          <li>{user.first_name}</li>
          <li>{user.last_name}</li>
          <li>{user.address}</li>
          <li>{user.phone}</li>
          <li>{user.occupation}</li>
          <img src={user.avatar} />
        </ul>
      </div>);
  })

  console.log(userDivs)
  return (
    <div>
      
      {userDivs}
    </div>
  )

}

export default ListOfUsers
