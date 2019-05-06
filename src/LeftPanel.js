import React from "react";
import styled from "styled-components";

export const LeftPanel = () => {
  return (
    <LeftPanelWrapper>
      <Title> Your places list</Title>
      {places.map(place => (
        <div>
          <Place name={place.name} />
        </div>
      ))}
    </LeftPanelWrapper>
  );
};

const LeftPanelWrapper = styled.div`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  width: 30%;
  max-width: 300px;
  height: 100%;
  float: left;
  z-index: 1;
`;
const Title = styled.div`
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
  padding: 10px 0px 10px 0px;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  width: 100%;
  height: 30px;
`;

type PlacePropsT = {
  name: string
};
const Place = (props: PlacePropsT) => {
  return (
    <PlaceWrapper>
      {props.name} <RemoveButton>-</RemoveButton>
    </PlaceWrapper>
  );
};

const PlaceWrapper = styled.div`
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  position: relative;
`;

const places = [
  {
    name: "Place 1",
    lat: 20.23,
    long: 19.15
  },
  {
    name: "Place 2",
    lat: 20.23,
    long: 19.15
  },
  {
    name: "Place 3",
    lat: 20.23,
    long: 19.15
  }
];

const RemoveButton = styled.button`
  position: absolute;
  right: 5px;
  top: 2px;
  color: #fff;
  background-color: rgb(225, 0, 80);
  width: 24px;
  height: 24px;
  padding: 0;
  font-size: 1.2rem;
  border: 0 solid white;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 16px 0px rgba(0, 0, 0, 0.12);
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  outline: none;
  border-radius: 50%;
  :active {
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.2);
    opacity: 0.8;
  }
`;
