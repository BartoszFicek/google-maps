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

    var input = document.getElementById("place-input");

    var autocomplete = new window.google.maps.places.Autocomplete(input);
    autocomplete.bindTo("bounds", map);
    autocomplete.setFields(["address_components", "geometry", "icon", "name"]);

    var geocoder = new window.google.maps.Geocoder();
    window.google.maps.event.addListener(map, "click", function(event) {
      var latlng = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      geocoder.geocode({ location: latlng }, function(results, status) {
        if (status === "OK") {
          var marker = new window.google.maps.Marker({
            position: event.latLng,
            map: map
          });
          add({
            marker: marker,
            name: results[0].formatted_address,
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
          });
        } else {
          console.log("Geocoder failed due to: " + status);
        }
      });
    });

    autocomplete.addListener("place_changed", function() {
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17); // Why 17? Because it looks good.
      }
    });
  }

  render() {
    return <div id="map" />;
  }
}

const mapStateToProps = state => {
  return { points: state.points };
};

const mapDispatchToProps = dispatch => {
  return {
    addPoint: point => dispatch(addPoint(point))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
