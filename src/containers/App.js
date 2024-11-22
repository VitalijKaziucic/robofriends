import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  searchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filterRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchfield.toLocaleLowerCase())
    );
    return !robots.length ? (
      <div className="tc">
        <h1>Loading</h1>
      </div>
    ) : (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={this.searchChange} />
        <ErrorBoundary>
          <CardList robots={filterRobots} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
