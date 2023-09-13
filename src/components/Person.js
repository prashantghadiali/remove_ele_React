import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here
  render() {
    const { img, email,show} = this.props.person;
    return (
      <>
      {show ? 
      <div className="person">
        <b onClick={()=> this.props.remove(this.props.person)}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>: null}
      </>
    );
  }
}

export default Person;
