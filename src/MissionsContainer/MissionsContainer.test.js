import React from 'react';
import { shallow } from "enzyme";
import { MissionsContainer, mapDispatchToProps, mapStateToProps } from "../MissionsContainer/MissionsContainer";
import { getMissionData } from "../actions/index";

describe('MissionsCOntainer', () => {
  let wrapper;
  let mockGetMissionData = jest.fn();
  let mockMissions = [{name: 'Operation get to mod 4'}]
  let mockMission = {
    name: 'Operation get to mod 4'
  };

  beforeEach(() => {
    wrapper = shallow(
      <MissionsContainer 
        mission={mockMission}
        getMissionData={mockGetMissionData}
        missions={mockMissions}
      />
    );
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return an object with a missions array', () => {
    const mockState = {
      missions: [{name: 'Apollo'}, {name: 'Falcon'}]
    }
    const expected = {
      missions: [{ name: 'Apollo' }, { name: 'Falcon' }]
    }
    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  });
});

describe('mapDispatchToProps', () => {
  it('calls dispatch with a getMissionData action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = getMissionData(['mock'])
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getMissionData(['mock'])

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})