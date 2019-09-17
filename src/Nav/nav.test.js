import React from 'react';
import { shallow } from 'enzyme';
import { Nav, mapStateToProps, mapDispatchToProps } from "./nav";
import { getSearchData } from "../actions/index";
import { getSearchResults } from '../apiCalls/apiCalls';


describe('Nav', () => {
  let wrapper;
  const mockGetSearchData = jest.fn();
  const mockHandleCondition = jest.fn();
  const mockHandleChange = jest.fn();
  const mockSearch = [{name: 'result'}];

  beforeEach(() => {
    wrapper = shallow(
      <Nav 
        search={mockSearch}
        getSearchData={mockGetSearchData}
      />
    )
  })
  it.only('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})