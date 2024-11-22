import React, { Component } from "react";

class Card extends Component {
  render() {
    const { id, name, email } = this.props.robot;
    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5 tc">
        <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
