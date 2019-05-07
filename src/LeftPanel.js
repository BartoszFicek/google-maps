import React from "react";
import { connect } from "react-redux";
import { addToList, deleteFromList } from "./index";
import * as S from "./styled";
import styled from "styled-components";

class LeftPanel extends React.Component {
  render() {
    return (
      <S.LeftPanelWrapper>
        <S.PanelTitle>
          Your places list
          <S.AddPlaceButton
            title="Add selected places to list"
            onClick={() => this.props.addToList(this.props.points)}
          >
            +
          </S.AddPlaceButton>
          <Input>
            <input id="place-input" placeholder="Enter a location" />
          </Input>
        </S.PanelTitle>

        {this.props.places.map(place => {
          return (
            <Place
              name={place.name}
              lat={place.lat}
              lng={place.lng}
              deleteFunction={this.props.deleteFromList}
            />
          );
        })}
      </S.LeftPanelWrapper>
    );
  }
}

const Input = styled.div`
  margin-top: 5px;
  input {
    height: 20px;
    width: 60%;
    font-size: 13px;
    padding-left: 4px;
    border-radius: 4px;
    outline: none;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);
  }
`;

const mapStateToProps = state => {
  return { points: state.points, places: state.places };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFromList: (lat, lng) => dispatch(deleteFromList(lat, lng)),
    addToList: points => dispatch(addToList(points))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftPanel);

type PlacePropsT = {
  name: string,
  lat: float,
  lng: float,
  deleteFunction: any
};
const Place = (props: PlacePropsT) => {
  return (
    <S.PlaceWrapper onClick={() => console.log("Siema")}>
      <S.PlaceName>{props.name}</S.PlaceName>
      <S.RemovePlaceButton
        title="Remove place from list"
        onClick={() => props.deleteFunction(props.lat, props.lng)}
      >
        <div style={{ marginTop: "-3px" }}>-</div>
      </S.RemovePlaceButton>
    </S.PlaceWrapper>
  );
};
