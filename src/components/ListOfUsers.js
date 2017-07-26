import React from "react";

class ListOfUsers extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      display : null,
      buttonText: "HIDE",
      searchText: ""

    };
    this.hideShow = this.hideShow.bind(this);
  }

  hideShow(event) {
    if(this.state.display !== "hide"){
      this.setState({display: "hide", buttonText: "SHOW"});
      console.log(this.state);
    } else {
      this.setState({display: null, buttonText: "HIDE"});
      console.log(this.state);
    }
  }

  render() {
    const userDivs = this.props.users.map((user) => {
      return (
        <div key={user.id}>
          <ul>
            <li>{user.first_name}</li>
            <li>{user.last_name}</li>
            <li>{user.address}</li>
            <li>{user.phone}</li>
            <li>{user.occupation}</li>
            <img role="presentation" src={user.avatar} />
          </ul>
        </div>);
    })

    return (
      <div>
        <div>
          <input
            label="search"
            id="searchBox"
            type="text"
            onChange={setState({searchText: search.value})}
            value={this.state.searchText}>
          </input>
        </div>
        <button onClick={this.hideShow}>{this.state.buttonText}</button>
        <div className={this.state.display}>{userDivs}</div>
      </div>
    )
  }
}

export default ListOfUsers
