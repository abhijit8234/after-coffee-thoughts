import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import CookieConsent, { Cookies } from "react-cookie-consent";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Footer />
          <CookieConsent>
            This website uses cookies to enhance the user experience.
          </CookieConsent>
        </div>
      </Router>
    )
  }
}

export default App;