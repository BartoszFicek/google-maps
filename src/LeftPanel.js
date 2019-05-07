import React from "react";
import { connect } from "react-redux";
import { addToList, deleteFromList } from "./index";
import * as S from "./styled";
import styled from "styled-components";

class LeftPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeKey: -1 };
  }
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
          <S.Input>
            <input id="place-input" placeholder="Enter a location" />
          </S.Input>
        </S.PanelTitle>

        {this.props.places.map((place, key) => {
          return (
            <div
              onClick={() => {
                this.setState({
                  activeKey: key === this.state.activeKey ? -1 : key
                });
              }}
            >
              <Place
                key
                i={key}
                activeKey={this.state.activeKey}
                name={place.name}
                lat={place.lat}
                lng={place.lng}
                deleteFunction={this.props.deleteFromList}
              />
            </div>
          );
        })}
      </S.LeftPanelWrapper>
    );
  }
}

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
  i: number,
  activeKey: number,
  name: string,
  lat: float,
  lng: float,
  deleteFunction: any
};
const Place = (props: PlacePropsT) => {
  return (
    <S.PlaceWrapper>
      <S.PlaceName>
        {props.name}
        {props.i === props.activeKey ? (
          <S.LatLng>
            Ltd: {props.lat} <br />
            Lng: {props.lng}
          </S.LatLng>
        ) : null}
      </S.PlaceName>
      <S.RemovePlaceButton
        title="Remove place from list"
        onClick={() => props.deleteFunction(props.lat, props.lng)}
      >
        <div style={{ marginTop: "-3px" }}>-</div>
      </S.RemovePlaceButton>
    </S.PlaceWrapper>
  );
};
