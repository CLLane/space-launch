export const nextLaunch = (state = [], action) => {
  switch(action.type) {
    case 'NEXT_LAUNCH':
      return action.launch;
    default:
      return state;
  }
}