import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as Actions from "../actions/index.js";

class Navigation1 extends React.Component {
  handleSignOut() {
    this.props.signOutUser();
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand text-danger" to="/home">
          Dogether
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbar-right nav">
            <li className="nav-item" key={1}>
              <Link className="nav-link text-danger" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item" key={2}>
              <Link className="nav-link text-danger" to="/dogFriendly">
                Dog-Friendly
              </Link>
            </li>
            <li className="nav-item" key={3}>
              <Link className="nav-link text-danger" to="/vets">
                Vet
              </Link>
            </li>
            <li className="nav-item" key={4}>
              <Link className="nav-link text-danger" to="/adoption">
                Adoption
              </Link>
            </li>
            <li className="nav-item" key={5}>
              <Link className="nav-link text-danger" to="/myAccount">
                My Account
              </Link>
            </li>
            <li className="nav-item" key={6}>
              <a
                id="signout"
                className="nav-link text-danger"
                onClick={() => this.handleSignOut()}
              >
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(null, Actions)(Navigation1);
