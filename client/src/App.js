import React, { Fragment } from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import NoMatch from './components/NoMatch';
import NavBar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <ProtectedRoute path="/products/:id" component={Product} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
);

export default App;