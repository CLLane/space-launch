import React from "react";
import { Component } from "react";
import { getLaunchSchedule, monthLaunchSchedule } from "../apiCalls/apiCalls";
import ScheduleContainer from "../ScheduleContainer/ScheduleContainer";
import  LandingContainer from "../LandingContainer/LandingContainer";
import RocketTypeContainer from "../RocketTypeContainer/RocketTypeContainer";
import { Favorites } from "../Favorites/FavoritesContainer";
import { Route, NavLink } from "react-router-dom";
import "./App.css";
import CompanyContainer from "../CompanyContainer/CompanyContainer";
import MissionsContainer from "../MissionsContainer/MissionsContainer";
import { connect } from "react-redux";
import { nextLaunchData } from "../actions/index";
import { monthLaunchData } from "../actions/index";

class App extends Component {

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
      <div className="App">
        <nav>
          <button>Search</button>
          <input type="text"></input>
            <NavLink exact to="/">
              Home
            </NavLink>
        </nav>
        <main>
          <aside>
            <NavLink exact to="/Schedule">
              Schedule
            </NavLink>
            <NavLink exact to="/RocketTypes">
              Rocket Types
            </NavLink>
            <NavLink exact to="/Companies">
              Companies
            </NavLink>
            <NavLink exact to="/Missions">
              Missions
            </NavLink>
            <NavLink exact to ="/Favorites">
              Favorites
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
              path="/Favorites"
              render={() => 
                <Favorites />} />
            <Route 
              exact
              path='/Missions'
              render={() => <MissionsContainer />}/>
          </section>
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  nextLaunchData: (nextLaunch) => dispatch(nextLaunchData(nextLaunch)),
  monthLaunchData: (monthLaunch) => dispatch(monthLaunchData(monthLaunch))
})

const mapStateToProps = ({ nextLaunch, monthLaunch }) => ({
  nextLaunch,
  monthLaunch
})


export default connect (mapStateToProps, mapDispatchToProps) (App);
