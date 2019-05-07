import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Map from "./Map";
import { LeftPanel } from "./LeftPanel";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <LeftPanel />
        <Map id="myMap" />
      </Wrapper>
    );
  }
}
export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
`;
