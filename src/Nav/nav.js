import React from "react";
import { Component } from "react";
import { getSearchResults } from "../apiCalls/apiCalls";
import { getSearchData } from "../actions/index";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Nav extends Component {
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
        <div>
          <label>Launches</label>
          <input
            type="radio"
            name="condition"
            value="launch/"
            onClick={this.handleCondition}
          ></input>
          <label>Company</label>
          <input
            type="radio"
            name="condition"
            value="agency?name="
            onClick={this.handleCondition}
          ></input>
          <label>Rockets</label>
          <input
            type="radio"
            name="condition"
            value="rocket/"
            onClick={this.handleCondition}
          ></input>
          <label>Missions</label>
          <input
            type="radio"
            name="condition"
            value="mission?name="
            onClick={this.handleCondition}
          ></input>
        </div>
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
          <NavLink to="/Search">
            <button
              onClick={() =>
                this.fetchSearchResults(this.state.condition, this.state.search)
              }
            >
              Search
            </button>
          </NavLink>
        )}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSearchData: search => dispatch(getSearchData(search))
});

const mapStateToProps = ({ search }) => ({
  search
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
