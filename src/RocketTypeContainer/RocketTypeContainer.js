import React from 'react';
import { Component } from 'react';
import { getRocketTypes } from '../apiCalls/apiCalls';
import { RocketCards } from '../Cards/RocketCards';
import { rocketTypeData } from "../actions/index";
import { connect } from "react-redux";

class RocketTypeContainer extends Component {

  async componentDidMount() {
    let rocketType = await getRocketTypes();
    this.props.rocketTypeData(rocketType)
    
  }
  
  render(){
    let rockets = this.props.rockets.map(rocket => <RocketCards rocket={rocket}/>)
    return(
      <>
        {rockets}
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  rocketTypeData: (rockets) => dispatch(rocketTypeData(rockets))
})

const mapStateToProps = ({ rockets }) => ({
  rockets
})

export default connect(mapStateToProps, mapDispatchToProps)(RocketTypeContainer)
