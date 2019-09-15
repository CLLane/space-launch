import * as actions from '../actions/index';

describe("Actions", () => {
  it("should have a type of NEXT_LAUNCH", () => {
    const mockLaunch = [{name: 'Chris'}]
    const mockAction = {
      type: 'NEXT_LAUNCH',
      launch: [{ name: 'Chris' }]
    }
    const result = actions.nextLaunchData(mockLaunch)
    expect(result).toEqual(mockAction)
  })
  it("should have a type of MONTH_LAUNCH", () => {
    const mockLaunches = [{name: 'Chris' }]
    const mockAction = {
      type: 'MONTH_LAUNCH',
      launches: [{name: 'Chris' }]
    }
    const result = actions.monthLaunchData(mockLaunches)
    expect(result).toEqual(mockAction)
  })
  it("should have a type of ROCKET_TYPE", () => {
    const mockRockets = [{ name: 'Chris' }]
    const mockAction = {
      type: 'ROCKET_TYPE',
      rockets: [{ name: 'Chris' }]
    }
    const result = actions.rocketTypeData(mockRockets);
    expect(result).toEqual(mockAction)
  })
  it('should have a type of MISSION_DATA', () => {
    const mockMissions = [{ name: 'Chris'}]
    const mockAction = {
      type: 'MISSION_DATA',
      missions: [{ name: 'Chris' }]
    }
    const result = actions.getMissionData(mockMissions)
    expect(result).toEqual(mockAction)
  })
  it('should have a type of COMPANY_DATA', () => {
    const mockCompany = [{ name: 'Chris' }]
    const mockAction = {
      type: 'COMPANY_DATA',
      companies: [{ name: 'Chris' }]
    }
    const result = actions.getCompanyData(mockCompany)
    expect(result).toEqual(mockAction)
  })
  it('should have a type of SEARCH_RESULTS', () => {
    const mockSearch = [{ name: 'Chris' }]
    const mockAction = {
      type: 'SEARCH_RESULTS',
      search: [{ name: 'Chris' }]
    }
    const result = actions.getSearchData(mockSearch)
    expect(result).toEqual(mockAction)
  })
})