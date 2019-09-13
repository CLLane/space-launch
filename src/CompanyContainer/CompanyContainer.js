import React from 'react';
import { Component } from "react";
import { CompanyCards } from '../Cards/CompanyCards';
import { getCompanies } from "../apiCalls/apiCalls";

export class CompanyContainer extends Component {
  constructor() {
    super();
    this.state = {
      companies: ''
    }
  }



async componentDidMount() {
  let companyFetch = await getCompanies();
  let companies = await companyFetch.map(company => <CompanyCards company={company} />)
  this.setState({ companies: companies })
}


 
render() {
  return (
    <>
      {this.state.companies}
    </>
  )
}
}