export const getLaunchSchedule = async (number) => {
  try {
    const response = await fetch(`https://launchlibrary.net/1.3/launch/next/${number}`)
    const data = await response.json();
    return data.launches;
  } catch (error) {
    throw new Error('Failed to retrieve scheduled launches')
  }
}

export const monthLaunchSchedule = async (start, end) => {
  try {
    const response = await fetch(`https://launchlibrary.net/1.3/launch/${start}/${end}`);
    const data = await response.json();
    return data.launches
  } catch (error) {
    throw new Error('Failed to retrieve the months scheduled launches')
  }
}

export const getRocketTypes = async () => {
  try {
    const response = await fetch('https://launchlibrary.net/1.3/rocket/');
    const data = await response.json();
    return data.rockets
  } catch (error) {
    throw new Error('Failed to retrieve Rocket Types')
  }
}

export const getCompanies = async () => {
  try {
    const response = await fetch('https://launchlibrary.net/1.3/agency');
    const data = await response.json();
    return data.agencies
  } catch (error) {
    throw new Error('Failed to retrieve Companies')
  }
}

export const getMissions = async () => {
  try {
    const response = await fetch('https://launchlibrary.net/1.3/mission')
    const data = await response.json();
    return data.missions;
  } catch (error) {
    throw new Error('Failed to retrieve Missions')
  }
}

export const getSearchResults = async (condition, searchValue) => {
  try {
    const response = await fetch(`https://launchlibrary.net/1.3/${condition}${searchValue}`)
    const data = await response.json();
    let dataType;
    if(condition === 'launch/') {
      dataType = 'launches'
    }
    if(condition === 'rocket/') {
      dataType = 'rockets'
    }
    if (condition === 'mission?name=') {
      dataType = 'missions'
    }
    if(condition === 'agency?name=') {
      dataType = 'agencies'
    }
    return data[dataType]
  } catch (error) {
    throw new Error('Failed to retrieve results')
  }
}