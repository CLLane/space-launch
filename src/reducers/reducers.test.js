import { nextLaunch } from "./nextLaunch";
import { monthLaunch } from "./monthLaunch";
import { rockets } from "./rockets";
import { missions } from "./missions";
import { companies } from "./companies";
import { search } from "./search";

describe('nextLaunch', () => {
  it('should return an array with launch objects', () => {
    let mockAction = {
      type: 'NEXT_LAUNCH',
      launch: [{launch: 'Space'}]
    }
    expect(nextLaunch([], mockAction)).toEqual([{ launch: 'Space' }])
  })
  it('should return default state if type is not recognized', () => {
    let mockAction = {
      type: 'This aint gonna work',

    }
    expect(nextLaunch([], mockAction)).toEqual([])
  })
})

describe('monthLaunch', () => {
  it('should return an array with an array of launch objects', () => {
    let mockAction = {
      type: 'MONTH_LAUNCH',
      launches: [{launch: 'Space'}, {launch: 'Space'}]
    }

    expect(monthLaunch([], mockAction)).toEqual([{ launch: 'Space' }, { launch: 'Space' }])
  })
   it("should return default state if type is not recognized", () => {
     let mockAction = {
       type: "This aint gonna work"
     };
     expect(monthLaunch([], mockAction)).toEqual([]);
   });
})

describe('rockets', () => {
  it('should return an array with rocket objects', () => {
    let mockAction = {
      type: 'ROCKET_TYPE',
      rockets: [{rocket: 'Falcon'}]
    }
    expect(rockets([], mockAction)).toEqual([{ rocket: 'Falcon'}])
  })
   it("should return default state if type is not recognized", () => {
     let mockAction = {
       type: "This aint gonna work"
     };
     expect(rockets([], mockAction)).toEqual([]);
   });
})

describe('missions', () => {
  it('should return an array with mission objects', () => {
    let mockAction = {
      type: 'MISSION_DATA',
      missions: [{ mission: 'Apollo'}]
    }
    expect(missions([], mockAction)).toEqual([{ mission: 'Apollo' }])
  })
   it("should return default state if type is not recognized", () => {
     let mockAction = {
       type: "This aint gonna work"
     };
     expect(missions([], mockAction)).toEqual([]);
   });
})

describe('companies', () => {
  it('should return an array with company objects', () => {
    let mockAction = {
      type: 'COMPANY_DATA',
      companies: [{ company: 'NASA'}]
    }
    expect(companies([], mockAction)).toEqual([{ company: 'NASA' }])
  })
   it("should return default state if type is not recognized", () => {
     let mockAction = {
       type: "This aint gonna work"
     };
     expect(companies([], mockAction)).toEqual([]);
   });
})

describe('search', () => {
  it('should return an array with search result objects', () => {
    let mockAction = {
      type: 'SEARCH_RESULTS',
      search: [{ result: 'Exactly what you wanted'}]
    }
    expect(search([], mockAction)).toEqual([{ result: 'Exactly what you wanted' }])
  })
   it("should return default state if type is not recognized", () => {
     let mockAction = {
       type: "This aint gonna work"
     };
     expect(search([], mockAction)).toEqual([]);
   });
})