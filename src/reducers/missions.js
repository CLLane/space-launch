export const missions = (state = [], action) => {
  switch (action.type) {
    case 'MISSION_DATA':
      return action.missions
    default: 
      return state;
  }
}