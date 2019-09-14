export const rockets = (state=[], action) => {
  switch (action.type) {
    case 'ROCKET_TYPE':
      return action.rockets
    default:
      return state;
  }
}