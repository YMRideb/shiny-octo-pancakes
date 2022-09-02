import { Component } from "react";

class UserCard extends Component {
  render() {
    return (
      <div className="User">
        <h2>Name: {this.props.firstName} {this.props.lastName} </h2>
        <p>Age: {this.props.userAge}</p>
        <p>Hair Color: {this.props.userHair}</p>
      </div>
    );
  }
}
export default UserCard;