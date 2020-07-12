import React, { Component } from "react";

class PersonCard extends Component {
  render() {
    const { firstname, lastname, age, haircolor } = this.props;
    return (
      <>
        <h2>
          {lastname} , {firstname}
        </h2>
        <p>Age: {age}</p>
        <p>Hair color: {haircolor}</p>
      </>
    );
  }
}

export default PersonCard;
