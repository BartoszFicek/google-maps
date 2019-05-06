import React, { Component } from "react";
import { connect } from "react-redux";
import { Map } from "./Map";

class App extends Component {
  render() {
    return (
      <div>
        <Map id="myMap" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
