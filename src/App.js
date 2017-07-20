import React from "react";
import "./App.css";
import ListOfUsers from "./components/ListOfUsers";
import UserDetail from "./components/UserDetail";
import users from "./users";

function App(props) {
  return (
    <div>
      <ListOfUsers users={props.users} />
    </div>
  );
}

export default App;
