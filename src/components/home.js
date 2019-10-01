import React from 'react';
import Header from './header'
import Footer from './footer'

class Home extends React.Component {
  render() {

    return (
      <div className="tmdb-listings">
				<Header />

				<Footer />
      </div>
    );
  }
}

export default Home;
