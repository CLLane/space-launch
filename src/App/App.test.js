import React from 'react';
import {App, mapDispatchToProps, mapStateToProps} from './App';

import {shallow} from 'enzyme';
import { nextLaunchData, monthLaunchData } from "../actions/index";

describe('App', () => {
  let wrapper;
  let mockNextLaunch = [{name: 'Steve'}]
  let monthLaunch = [{name: 'james'}, {name: 'Tony'}]
  let mockNextLaunchData = jest.fn()
  let mockMonthLaunchData = jest.fn()
  beforeEach(() => {
    wrapper = shallow(
      <App 
       nextLaunch={mockNextLaunch}
       monthLaunch={monthLaunch}
       nextLaunchData={mockNextLaunchData}
       monthLaunchData={mockMonthLaunchData}
      />
    )
  });
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});

describe('mapDipatchToProps', () => {
  it('calls dispatch with a nextLaunchData action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = nextLaunchData(["mock"]);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.nextLaunchData(["mock"]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });
  it('calls dispatch with a monthLaunchData action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = monthLaunchData(["mock"]);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.monthLaunchData(["mock"]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });
});

describe('mapStateToProps', () => {
  it('should return an array of launch objects', () => {
    const mockState = {
      nextLaunch: [{ name: "space x" }],
      monthLaunch: [{ name: "so close" }]
    };
    const expected = {
      nextLaunch: [{ name: "space x" }],
      monthLaunch: [{name: 'so close'}]
    };
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  });
});

describe('componentDidMount', () => {
  it('should invoke methods when component mounts', () => {
   
  })
})