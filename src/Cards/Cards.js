import React from 'react';

export const Cards = ({ launch }) => {
  return (
  <article>
  <h1>{launch.name}</h1>
    <p>{launch.windowstart}</p>
    <a href={launch.vidURLs}>Launch Video</a>
    <div>{launch.location.pads.map(pad =>
      <div>
        <p>{pad.name}</p>
        <a href={pad.mapURL}>Launch Pad Location</a>
        <p>{pad.latitude}</p>
        <p>{pad.longitude}</p>
        <div>{pad.agencies && pad.agencies.map(agency =>
          <div>
            <a href={agency.wikiURL}>{agency.name}</a>
            <p>{agency.abbrev}</p>
            <p>{agency.countryCode}</p>
            <div>{agency.infoURLs.map(url =>
              <div>
                <a href={url} >Link</a>
              </div>
            )}</div>
          </div>
        )}</div>
      </div>
    )}</div>
    </article>
    )
}