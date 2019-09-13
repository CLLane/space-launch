import React from 'react';
import { Component } from 'react';
import { getRocketTypes } from '../apiCalls/apiCalls';
import { RocketCards } from '../Cards/RocketCards';

export class RocketTypeContainer extends Component {
  constructor() {
    super();
    this.state = {
      rocketType: ''
    }
  }

  async componentDidMount() {
    let rocketType = await getRocketTypes();
    let rockets = await rocketType.map(rocket => <RocketCards rocket={rocket}/>)
    this.setState({ rocketType: rockets})
  }

  render(){
    return(
      <>
        {this.state.rocketType}
      </>
    )
  }
}
