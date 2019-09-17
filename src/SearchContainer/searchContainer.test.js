import React from 'react';
import { shallow } from 'enzyme';
import { SearchContainer, mapStateToProps } from "./searchContainer";

describe('SearchContainer', () => {
  let wrapper;
  let mockResult = {
    name: 'Name'
  }
  let mockSearch = [
   { name: 'search result' }
]
  
  beforeEach(() => {
    wrapper = shallow(
      <SearchContainer 
        result={mockResult}
        search={mockSearch}
        key={1}
      />
    )
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})

describe('mapStateToProps', () => {
  it('should return an array with search results', () => {
    const mockState = {
      search: [{name: 'falcon'}, {name: 'google'}]
    }
    const expected = {
      search: [{ name: "falcon" }, { name: "google" }]
    };
    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  })
})