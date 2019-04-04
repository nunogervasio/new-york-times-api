import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HeaderMain from "./components/HeaderMain";
import Footer from "./components/Footer";
import Content from "./components/Content";
import NavBar from "./components/navBar";
import TechSection from "./components/techSection";
import ArtsSection from "./components/artsSection";
import ScienceSection from "./components/scienceSection";
import WorldSection from "./components/worldSection";
import styles from "./App.module.css";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className={styles.site_wrapper}>
          <div className={styles.content_wrapper}>
            <HeaderMain title="The New York Times" />
            <NavBar />
            <Switch>
              <Route path="/technology" component={TechSection} />
              <Route path="/arts" component={ArtsSection} />
              <Route path="/science" component={ScienceSection} />
              <Route path="/world" component={WorldSection} />
              <Route exact path="/" component={Content} />
            </Switch>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
