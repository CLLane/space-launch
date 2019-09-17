import React from "react";
import { connect } from "react-redux";
import { SearchCard } from "../Cards/SearchCard";

export const SearchContainer = ({ search }) => {
  let searchResults = search.map(result => <SearchCard result={result} key={result.name}/>);

  return <>{searchResults}</>;
};

export const mapStateToProps = ({ search }) => ({
  search
});

export default connect(mapStateToProps)(SearchContainer);
