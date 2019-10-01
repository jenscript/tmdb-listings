import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
	    <div className="footer">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <a className="animated fadeIn logo" href="#">
                    <h1>//Jenscript</h1>
                    <p className="copyright">© Jenscript 2018. All rights reserved.</p>
                  </a>
                </li>
              </ul>
              <ul className="hidden-xs pull-right nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Web Development</Link></li>
              <li><Link to="/apps">Apps</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Footer;
