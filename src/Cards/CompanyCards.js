import React from 'react';

export const CompanyCards = ({ company }) => {
  return (
    <article>
      <h1>{company.name}</h1>
      <p>{company.countryCode}</p>
      <p>{company.abbrev}</p>
      {company.infoURL && <a href={company.infoURL}>Info</a> || <p>Sorry No Info</p>}
      {company.wikiURL && <a href={company.wikiURL}>Wiki</a> || <p>Sorry No Wiki</p>}
    </article>
  )
}