import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
	    <div className="header">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <a className="animated fadeIn logo" href="#">
                    <Link to="/"><h1>//TMDB Listings</h1></Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
