import React from 'react';
import ReactPlayer from 'react-player';

export const Cards = ({ launch }) => {
 
  let newName = launch.name.split('|').map(word => word)
  let urlString;
   if(!launch.vidURLs[0]){
    urlString = 'https://www.youtube.com/watch?v=21X5lGlDOfg'
  } else {
    urlString = launch.vidURLs.toString()
  }
  return (
  <article>
  <h1>{newName[0]}</h1>
  <h1>{newName[1] || null}</h1>
  <h1>{newName[2] || null}</h1>
    <p>{launch.windowstart}</p>
    {launch.vidURLs  && <ReactPlayer url={urlString}/>}
    <div>{launch.location.pads.map(pad =>
      <div>
        <p>{pad.name}</p>
        <a href={pad.mapURL}>Launch Pad Location</a>
        <div>{pad.agencies && pad.agencies.map(agency =>
          <div>
            <p>{agency.abbrev}</p>
            <p>{agency.countryCode}</p>
          </div>
        )}</div>
      </div>
    )}</div>
    </article>
    )
}