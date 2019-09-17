import React from "react";
import { Component } from "react";
import { getSearchResults } from "../apiCalls/apiCalls";
import { getSearchData } from "../actions/index";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from '../Images/logo.svg'

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      condition: ""
    };
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleCondition = e => {
    this.setState({ condition: e.target.value });
  };

  fetchSearchResults = async (condition, search) => {
    let searchFetch = await getSearchResults(condition, search);
    await this.props.getSearchData(searchFetch);
  };

  render() {
    return (
      <>
      <div className='image-container'>
       <img className='logo' alt='' src={Logo}></img>
      <p>Launch Log</p>
      </div>
      <form>

        <div className='radio-group'>
          <div className='radio'>
            <input
              type="radio"
              name="condition"
              value="launch/"
              onClick={this.handleCondition}>
            </input>
            Launch</div>
          <div className='radio'>
            <input
              className='radio'
              type="radio"
              name="condition"
              value="agency?name="
              onClick={this.handleCondition}>
            </input>
            Company</div>
          <div className='radio'>
            <input
              className='radio'
              type="radio"
              name="condition"
              value="rocket/"
              onClick={this.handleCondition}>
            </input>
            Rocket</div>
          <div className='radio'>
            <input
              className='radio'
              type="radio"
              name="condition"
              value="mission?name="
              onClick={this.handleCondition}>
            </input>
            Missions</div>
        </div>
        <div className='search-container'>
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleChange}
          ></input>
          {!this.state.search && !this.state.condition && (
            <button disabled>Search</button>
          )}
          {this.state.search && !this.state.condition && (
            <button disabled>Search</button>
          )}
          {!this.state.search && this.state.condition && (
            <button disabled>Search</button>
          )}
          {this.state.search && this.state.condition && (
            <NavLink className='active-button' to="/Search"
                onClick={() =>
                  this.fetchSearchResults(this.state.condition, this.state.search)
                }
              >
                Search
            </NavLink>
          )}
        </div>
      </form>
      </>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  getSearchData: search => dispatch(getSearchData(search))
});

export const mapStateToProps = ({ search }) => ({
  search
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
