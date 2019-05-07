import styled from "styled-components";

export const LeftPanelWrapper = styled.div`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  width: 35%;
  max-width: 300px;
  height: 100%;
  float: left;
  z-index: 1;
  overflow: scroll;
`;
export const PanelTitle = styled.div`
  position: relative;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
  padding: 15px 0px 15px 0px;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  width: 100%;
  height: 35px;
  margin-bottom: 30px;
`;

export const PlaceWrapper = styled.div`
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.1);
  margin: 10px;
  position: relative;
  border-radius: 4px;
`;

export const PlaceName = styled.div`
  margin: 5px 5px 5px 5px;
  padding: 5px 15px 5px 5px;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;

  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
`;

export const RemovePlaceButton = styled.button`
  position: absolute;
  top: 0px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  right: 0px;
  color: #fff;
  background-color: #f50057;
  width: 20px;
  height: 100%;
  padding: 0px;
  font-size: 1.2rem;
  border: 0 solid white;
  outline: none;
  box-shadow: 0px 0px 0px -2px rgba(0, 0, 0, 0.2);
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;

  :active {
    opacity: 0.8;
    border: 0 solid white;
  }
  :hover {
    cursor: pointer;
  }
`;

export const AddPlaceButton = styled.button`
  position: absolute;
  right: 10px;
  top: 12px;
  color: #fff;
  background-color: #2196f3;
  width: 36px;
  height: 36px;
  padding: 0px;
  font-size: 1.7rem;
  border: 0 solid white;
  box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  outline: none;
  border-radius: 50%;
  :active {
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.2);
    opacity: 0.8;
    border: 0 solid white;
  }
  :hover {
    cursor: pointer;
  }
`;
