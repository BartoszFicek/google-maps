export const getSelectedPoints = (point = {}) => ({
  type: "SELECT_POINT",
  payload: point
});
