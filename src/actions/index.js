export const nextLaunchData = (launch) => ({
  type: 'NEXT_LAUNCH',
  launch,
})

export const monthLaunchData = (launches) => ({
  type: 'MONTH_LAUNCH',
  launches
})

export const rocketTypeData = (rockets) => ({
  type: 'ROCKET_TYPE',
  rockets
})

export const getMissionData = (missions) => ({
  type: 'MISSION_DATA',
  missions
})

export const getCompanyData = (companies) => ({
  type: 'COMPANY_DATA',
  companies
})