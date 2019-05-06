import React, { Component } from "react";

export class Map extends Component {
  componentDidMount() {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 41.0082, lng: 28.9784 },
      zoom: 8
    });
  }

  render() {
    return <div style={{ width: 1000, height: 800 }} id="map" />;
  }
}
