import React from 'react'
import ReactPlayer from "react-player";

export const SearchCard = ({ result }) => {

  let urlString;
  if (!result.vidURLs) {
    urlString = ''
  } else {
    urlString = result.vidURLs.toString()
  }
  return (
    <article>
      <h1>{result.name}</h1>
      {result.configuration && <p>Config:{result.configuration}</p>}
      {result.wikiURL && <a className='wiki-link' href={result.wikiURL}>Wiki</a>}
      {result.infoURLs[0] && <a className='info-link' href={result.infoURLs[0]}>Info</a>}
      {result.imageURL && <img className='rocket-images' alt='' src={result.imageURL}></img>}
      {result.windowstart && <p>{result.windowstart}</p>}
      {urlString && <ReactPlayer url={urlString} />}
      {result.failreason && <p>{result.failreason}</p>}
      {result.pads > 0 && <p>{result.pads[0].name}</p>}
      {result.countryCode && <p>{result.countryCode}</p>}
      {result.abbrev && <p>{result.abbrev}</p>}
      {result.description && <p>{result.description}</p>}
      
    </article>
  )
}