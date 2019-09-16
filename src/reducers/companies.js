export const companies = (state = [], action) => {
  switch (action.type) {
    case 'COMPANY_DATA':
      return action.companies;
  
    default:
      return state;
  }
}