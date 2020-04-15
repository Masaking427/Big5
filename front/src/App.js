import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import Big5smasaki from './big5s/pages/big5masaki';
import Big5srio from './big5s/pages/big5rio';
import Tweets from './tweets/pages/tweetmasaki';
import Tweets2 from './tweets/pages/tweetmasaki2';
import Charts from './charts/pages/chart';

import './App.css';

const App = () => {

  let routes = (
    <Switch>
      <Route path="/masaki" exact>
        <Big5smasaki />
      </Route>
      <Route path="/rio" exact>
        <Big5srio />
      </Route>
      <Route path="/tweets" exact>
        <Tweets />
      </Route>
      <Route path="/tweets2" exact>
        <Tweets2 />
      </Route>
      <Route path="/Charts" exact>
        <Charts />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <Router>
        <Container>
          <Row>
            <Col><MainNavigation/></Col>
          </Row>
          <Row>
            <Col><main>{routes}</main></Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
};

export default App;
