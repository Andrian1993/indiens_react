import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Notice from './notice/Notice';
import Partner from './partner/Partner';
import Project from './project/Project';
import SignUp from './signUp/SignUp';
import SignUpType from './signUp/SignUpType';

function Main(props) {
  function checkHistory() {
    /* history.listen((location, action) => {
      console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`);
      console.log(`The last navigation action was ${action}`);
    }); */
    console.log('check history');
  }

  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Project" component={Project} />
        <Route path="/Partner" component={Partner} />
        <Route path="/Notice" component={Notice} />
        <Route path="/SignUp" component={SignUp} />
      </Switch>
    </main>
  );
}

export default Main;
