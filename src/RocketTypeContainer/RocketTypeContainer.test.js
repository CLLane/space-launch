import React from 'react';
import { shallow } from 'enzyme';
import { RocketTypeContainer, mapDispatchToProps, mapStateToProps } from "./RocketTypeContainer";
import { rocketTypeData } from "../actions/index";

describe('RocketTypeContainer', () => {
  let wrapper;
  let mockRocketTypeData = jest.fn();
  let mockRockets = [{ name: 'Falcon'}]
  let mockRocket = [{name: 'Falcon'}]

  beforeEach(() => {
    wrapper = shallow(
      <RocketTypeContainer
        rocket={mockRocket}
        rocketTypeData={mockRocketTypeData}
        rockets={mockRockets}
        key={1}
      />
    );
  });
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return an array with rocket objects', () => {
    const mockState = {
      rockets: [{name: 'falcon'}]
    }
    const expected = {
      rockets: [{ name: 'falcon' }]
    }
    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  });
});

describe('mapDispatchToProps', () => {
  it('calls dispatch with a rocketTypeData action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = rocketTypeData(['mock'])
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.rocketTypeData(['mock'])

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})