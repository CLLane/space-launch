import React from 'react';
import { shallow } from 'enzyme'
import { ScheduleContainer, mapStateToProps } from "../ScheduleContainer/ScheduleContainer";

describe('ScheduleContainer', () => {
  let wrapper;
  let mockMonthLaunch = [{name: 'Falcon'}]

  beforeEach(() => {
    wrapper = shallow(
      <ScheduleContainer
        monthLaunch={mockMonthLaunch}
        key={1}
      />
    );
  });
  it('should match a snapshot', () => {
  expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return an array with launch objects', () => {
    const mockState = {
      monthLaunch: [{name: 'Falcon'}]
    }
    const expected = {
      monthLaunch: [{ name: 'Falcon' }]
    }
    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  })
})