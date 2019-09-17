import {
  getLaunchSchedule,
  monthLaunchSchedule,
  getRocketTypes,
  getCompanies,
  getMissions,
  getSearchResults
} from "./apiCalls";

describe("Get", () =>{
  let mockResponse, mockData;
  beforeEach(() => {
    let mockData = {
      id: 1688,
      name: "H-IIB 304 | Kounotori 8 (HTV-8)",
      windowstart: "September 18, 2019 21:33:29 UTC",
      windowend: "September 18, 2019 21:33:29 UTC",
      net: "September 18, 2019 21:33:29 UTC",
      wsstamp: 0,
      westamp: 0,
      netstamp: 0,
      isostart: "20190918T213329Z",
      isoend: "20190918T213329Z",
      isonet: "20190918T213329Z",
      status: 2,
      inhold: 0,
      tbdtime: 1,
      vidURLs: [
        "https://www.youtube.com/watch?v=EqGcvxZRIzI",
        "https://www.youtube.com/watch?v=21X5lGlDOfg"
      ],
      vidURL: null,
      infoURLs: [ ],
      infoURL: null,
      holdreason: null,
      failreason: null,
      tbddate: 1,
      probability: -1,
      hashtag: "#HTV8",
    }
    mockResponse = {launches: mockData}
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
    });
  });
  mockResponse = { launches: mockData }
 
  
  
 
});
  it('getLaunchSchedule should call fetch with the correct url', () => {
    getLaunchSchedule(1)
    expect(window.fetch).toHaveBeenCalledWith('https://launchlibrary.net/1.3/launch/next/1')
  });
  it('getLaunchSchedule should return a successfull response (HAPPY)', () => {
    mockResponse = { launches: mockData }
    expect(getLaunchSchedule(1)).resolves.toEqual(mockData)
  });
  it('should return an error if the promise rejects (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("Failed to retrieve scheduled launches"));
    });
    expect(getLaunchSchedule(1)).rejects.toEqual(Error("Failed to retrieve scheduled launches"))
  })
  it('monthLaunchSchedule should call fetch with the correct url', () => {
    monthLaunchSchedule('2015-08-20', '2015-09-20')
    expect(window.fetch).toHaveBeenCalledWith('https://launchlibrary.net/1.3/launch/2015-08-20/2015-09-20')
  });
  it('monthLaunchSchedule should return a successfull response (HAPPY)', () => {
    mockResponse = { launches: mockData }
    expect(monthLaunchSchedule('2015-08-20', '2015-09-20')).resolves.toEqual(mockData)  
  })
  it('should return an error if the promise rejects (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("Failed to retrieve the months scheduled launches"));
    });
    expect(monthLaunchSchedule('2015-08-20', '2015-09-20')).rejects.toEqual(Error("Failed to retrieve the months scheduled launches"))
  })

  it('getRocketTypes should call fetch with the correct url', () => {
    getRocketTypes()
    expect(window.fetch).toHaveBeenCalledWith('https://launchlibrary.net/1.3/rocket/')
  });
  it('getRocketTypes should return a successfull response (HAPPY)', () => {
    mockResponse = { rockets: mockData }
    expect(getRocketTypes()).resolves.toEqual(mockData)
  })
  it('should return an error if the promise rejects (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("Failed to retrieve Rocket Types"));
    });
    expect(getRocketTypes()).rejects.toEqual(Error("Failed to retrieve Rocket Types"))
  })
  it('getCompanies should call fetch with the correct url', () => {
    getCompanies()
    expect(window.fetch).toHaveBeenCalledWith('https://launchlibrary.net/1.3/agency')
  });
  it('getCompanies should return a successfull response (HAPPY)', () => {
    mockResponse = { agencies: mockData }
    expect(getCompanies()).resolves.toEqual(mockData)
  })
  it('should return an error if the promise rejects (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("Failed to retrieve Companies"));
    });
    expect(getCompanies()).rejects.toEqual(Error("Failed to retrieve Companies"))
  })

  it('getMissions should call fetch with the correct url', () => {
    getMissions()
    expect(window.fetch).toHaveBeenCalledWith('https://launchlibrary.net/1.3/mission')
  });
  it('getMissions should return a successfull response (HAPPY)', () => {
    mockResponse = { missions: mockData }
    expect(getMissions()).resolves.toEqual(mockData)
  })
  it('should return an error if the promise rejects (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("Failed to retrieve Missions"));
    });
    expect(getMissions()).rejects.toEqual(Error("Failed to retrieve Missions"))
  })

  it('getSearchResults should call fetch with the correct url', () => {
    getSearchResults('rocket/', 'falcon')
    expect(window.fetch).toHaveBeenCalledWith('https://launchlibrary.net/1.3/rocket/falcon')
  });
  it('getSearchResults should return a successfull response (HAPPY)', () => {
    expect(getSearchResults()).resolves.toEqual(mockResponse)
  })
  it('should return an error if the promise rejects (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("Failed to retrieve results"));
    });
    expect(getSearchResults()).rejects.toEqual(Error("Failed to retrieve results"))
  })


})
