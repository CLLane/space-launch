import React from "react";
import { Component } from "react";
import { getLaunchSchedule, monthLaunchSchedule } from "../apiCalls/apiCalls";
import ScheduleContainer from "../ScheduleContainer/ScheduleContainer";
import  LandingContainer from "../LandingContainer/LandingContainer";
import RocketTypeContainer from "../RocketTypeContainer/RocketTypeContainer";
import { Route, NavLink } from "react-router-dom";
import "./App.css";
import CompanyContainer from "../CompanyContainer/CompanyContainer";
import MissionsContainer from "../MissionsContainer/MissionsContainer";
import { connect } from "react-redux";
import { nextLaunchData } from "../actions/index";
import { monthLaunchData } from "../actions/index";
import Nav from "../Nav/nav";
import SearchContainer from "../SearchContainer/searchContainer";

export class App extends Component {

  async componentDidMount() {
    let launches = await getLaunchSchedule(1);
    this.props.nextLaunchData(launches);

    let monthStart = await this.formatMonthStart();
    let monthEnd = await this.formatMonthEnd();
    let month = await monthLaunchSchedule(monthStart, monthEnd);
    this.props.monthLaunchData(month);
  }

  formatMonthStart = () => {
    let date = new Date();
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    let day = date.getDate();
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  formatMonthEnd = () => {
    let date = new Date();
    let month = date.getMonth() + 2;
    if (month < 10) {
      month = `0${month}`;
    }
    let day = date.getDate();
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  render() {
    return (
      <body>
        <nav>
          <Nav />
        </nav>
        <main>
          <aside>
            <NavLink className='nav-link' exact to="/">
              Home
            </NavLink>
            <NavLink className='nav-link' exact to="/Schedule">
              Schedule
            </NavLink>
            <NavLink className='nav-link' exact to="/RocketTypes">
              Rocket Types
            </NavLink>
            <NavLink className='nav-link' exact to="/Companies">
              Companies
            </NavLink>
            <NavLink className='nav-link' exact to="/Missions">
              Missions
            </NavLink>
          </aside>
          <section>
            {this.props.nextLaunch && (
              <Route
                exact
                path="/"
                render={() => <LandingContainer />}
              />
            )}
            {this.props.monthLaunch && (
              <Route
                exact
                path="/Schedule"
                render={() => (
                  <ScheduleContainer />
                )}
              />
            )}
            <Route
              exact
              path="/RocketTypes"
              render={() => <RocketTypeContainer />}
            />
            <Route
              exact
              path="/Companies"
              render={() => 
                <CompanyContainer />} 
            />
            <Route 
              exact
              path='/Missions'
              render={() => <MissionsContainer />}/>
            <Route 
              exact
              path='/Search'
              render={() => <SearchContainer />}/>
          </section>
        </main>
      </body>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  nextLaunchData: (nextLaunch) => dispatch(nextLaunchData(nextLaunch)),
  monthLaunchData: (monthLaunch) => dispatch(monthLaunchData(monthLaunch))
})

export const mapStateToProps = ({ nextLaunch, monthLaunch }) => ({
  nextLaunch,
  monthLaunch
})


export default connect (mapStateToProps, mapDispatchToProps) (App);
