import React from "react";
import { connect } from "react-redux";
import { addToList, deleteFromList } from "./index";
import * as S from "./styled";

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
          <S.Input>
            <input id="place-input" placeholder="Enter a location" />
          </S.Input>
        </S.PanelTitle>

        {this.props.places.map((place, key) => {
          return (
            <Place
              key
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

class Place extends React.Component {
  state = { active: false };

  render() {
    return (
      <S.PlaceWrapper>
        <S.PlaceName
          onClick={() => this.setState({ active: !this.state.active })}
        >
          {this.props.name}
          {this.state.active ? (
            <S.LatLng>
              Ltd: {this.props.lat} <br />
              Lng: {this.props.lng}
            </S.LatLng>
          ) : null}
        </S.PlaceName>
        <S.RemovePlaceButton
          title="Remove place from list"
          onClick={() =>
            this.props.deleteFunction(this.props.lat, this.props.lng)
          }
        >
          <div style={{ marginTop: "-3px" }}>-</div>
        </S.RemovePlaceButton>
      </S.PlaceWrapper>
    );
  }
}
