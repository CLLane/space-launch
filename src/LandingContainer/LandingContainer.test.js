import React from "react";
import { shallow } from "enzyme";
import { LandingContainer, mapStateToProps } from "./LandingContainer";

describe('LandingContainer', () => {
  let wrapper;
  let mockNextLaunch = {
    id: 1,
    name: 'Chris'
  }
  
  beforeEach(() => {
    wrapper = shallow(<LandingContainer 
      nextLaunch={[mockNextLaunch]}
      key={1}
    />);
  });
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return an object with a nextLuanch object', () => {
    const mockState = {
      nextLaunch: [{name: 'chris'}]
    }
    const expected = { 
      nextLaunch: [{ name: 'chris' }]
    }
    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  })
})