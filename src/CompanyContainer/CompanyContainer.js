import React from 'react';
import { Component } from "react";
import { CompanyCards } from '../Cards/CompanyCards';
import { getCompanies } from "../apiCalls/apiCalls";
import { getCompanyData } from '../actions';
import { connect } from 'react-redux';

export class CompanyContainer extends Component {

async componentDidMount() {
  let companyFetch = await getCompanies();
  this.props.getCompanyData(companyFetch)
}



render() {
  let companies = this.props.companies.map(company => 
  <CompanyCards company={company} />)
  return (
    <>
      {companies}
    </>
  )
}
}

export const mapDispatchToProps = (dispatch) => ({
  getCompanyData:  (companies) => dispatch(getCompanyData(companies))
})

export const mapStateToProps = ({ companies }) => ({
  companies
})

export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer)