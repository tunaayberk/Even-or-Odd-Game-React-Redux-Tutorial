import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Music Master</h2>
        <input placeholder="Search for an Artist" />
        <button>Search</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);

  return { gameStarted: state.gameStarted };
};

const componentConnector = connect(mapStateToProps);

export default componentConnector(App);
