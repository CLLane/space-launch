import React from "react";
// import { Cards } from "../Cards/Cards";
import { connect } from "react-redux";
import { SearchCard } from "../Cards/SearchCard";

const SearchContainer = ({ search }) => {
  let searchResults = search.map(result => <SearchCard result={result}/>);

  return <>{searchResults}</>;
};

const mapStateToProps = ({ search }) => ({
  search
});

export default connect(mapStateToProps)(SearchContainer);
