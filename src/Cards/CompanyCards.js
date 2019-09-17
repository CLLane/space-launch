import React from 'react';

export const CompanyCards = ({ company }) => {
  let abbrev = company.countryCode.split(',')
  return (
    <article>
      <h1>{company.name}</h1>
      <h3>Countries:</h3>
    <div className='country-container'>
    <div className='abbrev'>
        <p>{abbrev[0]}</p>
        <p>{abbrev[1]}</p>
        <p>{abbrev[2]}</p>
        <p>{abbrev[3]}</p>
      </div>
     <div className='abbrev'>
        <p>{abbrev[4]}</p>
        <p>{abbrev[5]}</p>
        <p>{abbrev[6]}</p>
        <p>{abbrev[7]}</p>
      </div>
     <div className='abbrev'>
        <p>{abbrev[8]}</p>
        <p>{abbrev[9]}</p>
        <p>{abbrev[10]}</p>
        <p>{abbrev[11]}</p>
      </div>
     <div className='abbrev'>
        <p>{abbrev[12]}</p>
        <p>{abbrev[13]}</p>
        <p>{abbrev[14]}</p>
        <p>{abbrev[15]}</p>
      </div>
    </div>
    <h3>Company:</h3>
    <p>{company.abbrev}</p>
      {company.infoURL && <a className='wiki-link' href={company.infoURL}>Info</a> || <p>Sorry No Info</p>}
      {company.wikiURL && <a className='info-link' href={company.wikiURL}>Wiki</a> || <p>Sorry No Wiki</p>}
    </article>
  )
}