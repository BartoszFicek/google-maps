import React, { Component } from "react";
import styled from "styled-components";

import Map from "./Map";
import LeftPanel from "./LeftPanel";

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <LeftPanel />
        <Map id="myMap" />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
`;
