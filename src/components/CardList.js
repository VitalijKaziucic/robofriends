import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  render() {
    const { robots } = this.props;
    return (
      <div>
        {robots.map((user) => {
          return <Card key={user.id} robot={user} />;
        })}
      </div>
    );
  }
}

export default CardList;
