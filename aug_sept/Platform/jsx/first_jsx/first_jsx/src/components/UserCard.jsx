import { Component } from "react";

class UserCard extends Component {
  constructor(props){
    super(props);
    // a special type of variable that can we can change,
    //and when it does change the component reloads on the screen with the newly changed information
    this.state = {
      userAge: this.props.userAge
  };
}
  render() {
    return (
      <div className="User">
        <h2>Name: {this.props.firstName} {this.props.lastName} </h2>
        <p>Age: {this.state.userAge}</p>
        <p>Hair Color: {this.props.userHair}</p>
        <button onClick={() =>this.setState({userAge: this.state.userAge+1})}>Click this button for: {this.props.firstName}</button>
      </div>
    );
  }
}
export default UserCard;