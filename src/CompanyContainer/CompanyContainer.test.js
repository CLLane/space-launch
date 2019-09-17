import React from "react";
import { shallow } from "enzyme";
import {
  CompanyContainer,
  mapDispatchToProps,
  mapStateToProps
} from "./CompanyContainer";
import { getCompanyData } from "../actions/index";

describe("CompanyContainer", () => {
  let wrapper;
  let mockGetCompanyData = jest.fn();
  let mockCompanies = [{ name: "space x" }];
  let mockCompany = {
    id: 1,
    name: "Chris"
  };

  beforeEach(() => {
    wrapper = shallow(
      <CompanyContainer
        company={mockCompany}
        getCompanyData={mockGetCompanyData}
        companies={mockCompanies}
      />
    );
  });

  it("should match a snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return an object with a companies array', () => {
    const mockState = {
      companies: [{name: 'space x'}]
    }
    const expected = {
      companies: [{ name: 'space x' }]
    }
    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  });
});

describe('mapDispatchToProps', () => {
  it('calls dispatch with a getCompanyData action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = getCompanyData(['mock']);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getCompanyData(['mock'])

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})
