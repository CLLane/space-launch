import React from "react";
import { shallow } from "enzyme";
import Cards from "../Cards/Cards";
import { MissionCard } from "../Cards/MissionCards";
import { CompanyCards } from "./CompanyCards";
import { RocketCards } from "./RocketCards";
import { SearchCard } from "./SearchCard";


describe('Cards', () => {
  const mockLaunch = {
    name: 'This | is | a Name',
    windowstart: 'this is a date',
    vidURLs: '',
    location: {
      pads: [{
        name: 'launch site',
        agencies: [{
          abbrev: 'stff',
          countryCode: 'GMT'
        }]
      }]
    }
  }
  it('should match snapshot', () => {
    let wrapper = shallow(<Cards launch={mockLaunch} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('MissionCards', () => {
  let mockMission = {
    name: 'name',
    description: 'some launch things',
    infoURL: 'this is a link',
    wikiURL: 'also a link'
  }
  it('should match snapshot', () => {
    let wrapper = shallow(<MissionCard mission={mockMission} />)
    expect(wrapper).toMatchSnapshot();
  });
});

describe('CompanyCards', () => {
  let mockCompany = {
    name: 'A country',
    countryCode: 'a,b,c,d',
    abbrev: 'stff',
    infoURL: 'this is a link',
    wikiURL: 'also a link'
  };
  it('Should match snapshot', () => {
    let wrapper = shallow(<CompanyCards company={mockCompany} />);
    expect(wrapper).toMatchSnapshot();
  })
})

describe('RocketCards', () => {
  let mockRocket = {
    name: 'falcon',
    family: {
      name:'birds'
    },
    wikiURL: 'This is a link',
    infoURL: 'Also a link',
    imageURL: 'Image'
  };
  it('should match the snapshot', () => {
    let wrapper = shallow(<RocketCards rocket={mockRocket} />);
    expect(wrapper).toMatchSnapshot()

  })
})

describe('SearchCard', () => {
  let mockResult = {
    name: 'Chris',
    configuration: 'Hey',
    wikiURL: 'url',
    infoURLs: ['url'],
    imageURL: 'url',
    windowstart: 'date',
    vidURLs: '',
    failreason: 'blew up',
    pads: ['cheese'],
    countryCode: 'GMT',
    description: 'Snapshot Test'
  };
  it('should match the snapshot', () => {
    let wrapper = shallow(<SearchCard result={mockResult} />)
    expect(wrapper).toMatchSnapshot()
  })
})