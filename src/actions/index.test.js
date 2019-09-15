import * as actions from '../actions/index';

describe("nextLaunchData", () => {
  it("should have a type of NEXT_LAUNCH", () => {
    const mockLaunch = [{name: 'Chris'}]
    const mockAction = {
      type: 'NEXT_LAUNCH',
      launch: [{ name: 'Chris' }]
    }
    const result = actions.nextLaunchData(mockLaunch)
    expect(result).toEqual(mockAction)
  })
})