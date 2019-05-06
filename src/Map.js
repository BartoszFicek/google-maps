import React, { Component } from "react";

export class Map extends Component {
  componentDidMount() {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 50.0647, lng: 19.945 },
      zoom: 14
    });
    window.google.maps.event.addListener(map, "click", function(event) {
      console.log(event.latLng.lat(), event.latLng.lng());
      var marker = new window.google.maps.Marker({
        position: event.latLng,
        map: map
      });
    });
  }

  render() {
    return <div id="map" />;
  }
}
