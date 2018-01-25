import React from "react";
import { ConnectedRouter } from "react-router-redux";
import { Route, Redirect } from "react-router-dom";
import { history } from "../store.js";
import { connect } from "react-redux";

import SignUp from "./SignUp.js";
import LogIn from "./LogIn.js";
import Home from "./Home.js";
import Gallery from "./Gallery.js";
import DogFriendly from "./DogFriendly.js";
import Vets from "./Vets.js";
import Adoption from "./Adoption.js";
import NewArticle from "./NewArticle.js";
import AddVet from "./AddVet.js";
import AddDogFriendly from "./AddDogFriendly.js";
import AddGallery from "./AddGallery.js";
import AddAdoption from "./AddAdoption.js";
import MyAccount from "./MyAccount.js";

const PrivateRoute = ({ component: Component, authenticated, ...props }) => {
  return (
    <Route
      {...props}
      render={props =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};
const PublicRoute = ({ component: Component, authenticated, ...props }) => {
  return (
    <Route
      {...props}
      render={props =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/home" />
        )
      }
    />
  );
};

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className="container">
          <PublicRoute
            authenticated={this.props.authenticated}
            path="/signup"
            component={SignUp}
          />
          <PublicRoute
            authenticated={this.props.authenticated}
            exact
            path="/"
            component={LogIn}
          />
          <PrivateRoute
            authenticated={this.props.authenticated}
            path="/home"
            component={Home}
          />
          <PrivateRoute
            authenticated={this.props.authenticated}
            path="/gallery"
            component={Gallery}
          />
          <PrivateRoute
            authenticated={this.props.authenticated}
            path="/vets"
            component={Vets}
          />
          <PrivateRoute
            authenticated={this.props.authenticated}
            path="/dogFriendly"
            component={DogFriendly}
          />
          <PrivateRoute
            authenticated={this.props.authenticated}
            path="/adoption"
            component={Adoption}
          />
          <PrivateRoute
            authenticated={this.props.authenticated}
            path="/newArticle"
            component={NewArticle}
          />
          <PrivateRoute
            authenticated={this.props.authenticated}
            path="/addVet"
            component={AddVet}
          />
          <PrivateRoute
            authenticated={this.props.authenticated}
            path="/addDogFriendly"
            component={AddDogFriendly}
          />
          <PrivateRoute
            authenticated={this.props.authenticated}
            path="/addGallery"
            component={AddGallery}
          />
          <PrivateRoute
            authenticated={this.props.authenticated}
            path="/addForAdoption"
            component={AddAdoption}
          />
          <PrivateRoute
          authenticated={this.props.authenticated}
          path="/myAccount"
          component={MyAccount}
          />
        </div>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(App);
