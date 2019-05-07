import React, { Component } from "react";
import { connect } from "react-redux";
import { addPoint } from "./index";

class Map extends Component {
  componentDidMount() {
    let add = this.props.addPoint;

    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 50.0647, lng: 19.945 },
      zoom: 14
    });
    window.google.maps.event.addListener(map, "click", function(event) {
      add({
        name: "ELO",
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      });

      var marker = new window.google.maps.Marker({
        position: event.latLng,
        map: map
      });
    });
  }

  render() {
    console.log(this.props.points);
    return <div id="map" />;
  }
}

// const mapStateToProps = state => {
//   return { points: state.points };
// };

// const mapDispatchToProps = dispatch => {
//   return { addPoint };
// };

export default connect(
  state => ({
    points: state.points
  }),
  { addPoint }
)(Map);
