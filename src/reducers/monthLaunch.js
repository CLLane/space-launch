export const monthLaunch = (state = [], action) => {
  switch (action.type) {
    case 'MONTH_LAUNCH': 
      return action.launches;
    default:
      return state;
  }
}