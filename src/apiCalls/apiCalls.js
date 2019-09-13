export const getLaunchSchedule = async (number) => {
  try {
    const response = await fetch(`https://launchlibrary.net/1.3/launch/next/${number}`)
    const data = await response.json();
    return data.launches;
  } catch (error) {
    console.log(error.message)
    throw new Error('Failed to retrieve scheduled launches')
  }
}

export const monthLaunchSchedule = async (start, end) => {
  try {
    const response = await fetch(`https://launchlibrary.net/1.3/launch/${start}/${end}`);
    const data = await response.json();
    return data.launches
  } catch (error) {
    console.log(error.message)
    throw new Error('Failed to retrieve the months scheduled launches')
  }
}

export const getRocketTypes = async () => {
  try {
    const response = await fetch('https://launchlibrary.net/1.3/rocketfamily/');
    const data = await response.json();
    console.log(data.RocketFamilies)
    return data.RocketFamilies
  } catch (error) {
    console.log(error.message)
    throw new Error('Failed to retrieve Rocket Types')
  }
}