import React from "react";
import { shallow } from "enzyme";
import { Nav, mapStateToProps, mapDispatchToProps } from "./nav";
import { getSearchData } from "../actions/index";
import { getSearchResults } from "../apiCalls/apiCalls";
jest.mock('../apiCalls/apiCalls')

describe("Nav", () => {
  let wrapper;
  const mockGetSearchData = jest.fn();
  const mockSearch = [{ name: "result" }];

  beforeEach(() => {
    wrapper = shallow(
      <Nav search={mockSearch} getSearchData={mockGetSearchData} />
    );
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should call handleChange method when change happens", () => {
    const mockEvent = { target: { value: "falcon" } };

    wrapper
      .find("input")
      .at(4)
      .simulate("change", mockEvent);

    expect(wrapper.state("search")).toEqual("falcon");
  });
  it("should call handleCondition method when a click happens", () => {
    const mockEvent = { target: { value: "launch/" } };

    wrapper
      .find("input")
      .at(0)
      .simulate("click", mockEvent);

    expect(wrapper.state("condition")).toEqual("launch/");
  });
  it("should call handleCondition method when a click happens", () => {
    const mockEvent = { target: { value: "agency?name=" } };

    wrapper
      .find("input")
      .at(1)
      .simulate("click", mockEvent);

    expect(wrapper.state("condition")).toEqual("agency?name=");
  });
  it("should call handleCondition method when a click happens", () => {
    const mockEvent = { target: { value: "rocket/" } };

    wrapper
      .find("input")
      .at(2)
      .simulate("click", mockEvent);

    expect(wrapper.state("condition")).toEqual("rocket/");
  });
  it("should call handleCondition method when a click happens", () => {
    const mockEvent = { target: { value: "mission?name=" } };

    wrapper
      .find("input")
      .at(3)
      .simulate("click", mockEvent);

    expect(wrapper.state("condition")).toEqual("mission?name=");
  });
});

describe('mapStateToProps', () => {
  it('should return an object with search results', () => {
    const mockState = {
      search: [{name: 'falcon'}, {name: 'China'}]
    };
    const expected = {
      search: [{ name: "falcon" }, { name: "China" }]
    };
    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  });
});

describe('mapDispatchToProps', () => {
  it('should call getSearchData', () => {
    const mockSearch = {
      search: [{ name: "falcon" }, { name: "China" }]
    };
    const mockDispatch = jest.fn();
    const actionToDispatch = getSearchData(mockSearch);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getSearchData(mockSearch);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });
});

describe('fetchSearchResults', () => {
  it('', async () => {
    const mockGetSearchData = jest.fn();
    let wrapper = shallow(<Nav search={'mockSearch'} getSearchData={mockGetSearchData} />)
    await wrapper.instance().fetchSearchResults()
    expect(getSearchResults).toHaveBeenCalled()
    expect(mockGetSearchData).toHaveBeenCalled()
  });
});