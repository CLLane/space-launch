import React from 'react';
import { Component } from 'react';
import { getMissions} from '../apiCalls/apiCalls';
import { MissionCard } from '../Cards/MissionCards';
import { connect } from 'react-redux';
import { getMissionData } from '../actions';

export class MissionsContainer extends Component {

  async componentDidMount() {
    let missionType = await getMissions();
    this.props.getMissionData(missionType)
  }
  
  render() {
    let missions = this.props.missions.map(mission => <MissionCard mission={mission} />)
    return (
      <>
        {missions}
      </>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  getMissionData: (missions) => dispatch(getMissionData(missions))
})

export const mapStateToProps = ({ missions }) => ({
  missions
})

export default connect(mapStateToProps, mapDispatchToProps)(MissionsContainer)
