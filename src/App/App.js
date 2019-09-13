import React from "react";
import { Component } from "react";
import { getLaunchSchedule, monthLaunchSchedule } from "../apiCalls/apiCalls";
import { ScheduleContainer } from "../ScheduleContainer/ScheduleContainer";
import { LandingContainer } from "../LandingContainer/LandingContainer";
import { RocketTypeContainer } from "../RocketTypeContainer/RocketTypeContainer";
import { Route, NavLink } from "react-router-dom";
import "./App.css";
import { CompanyContainer } from "../CompanyContainer/CompanyContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      calendar: "",
      launches: ""
    };
  }

  async componentDidMount() {
    let launches = await getLaunchSchedule(1);
    this.setState({ launches: launches });

    let monthStart = await this.formatMonthStart();
    let monthEnd = await this.formatMonthEnd();
    let month = await monthLaunchSchedule(monthStart, monthEnd);
    this.setState({ calendar: month });
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
        </nav>
        <main>
          <aside>
            <NavLink exact to="/">
              Home
            </NavLink>
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
          </aside>
          <section>
            {this.state.launches && (
              <Route
                exact
                path="/"
                render={() => <LandingContainer launch={this.state.launches} />}
              />
            )}
            {this.state.calendar && (
              <Route
                exact
                path="/Schedule"
                render={() => (
                  <ScheduleContainer launch={this.state.calendar} />
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
          </section>
        </main>
      </div>
    );
  }
}

export default App;
