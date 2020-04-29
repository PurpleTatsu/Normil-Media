import React from 'react';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import MetaTags from 'react-meta-tags';


import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hamburger from './components/Hamburger';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <MetaTags>
          <title>Normil Media</title>
          <meta name="description" content="Normil Media is a media company dedicated to helping clients achieve and manage their media goals by providing best-in-class media, marketing and communications services." />
          <meta property="og:title" content="Normil Media" />
          <meta property="og:image" content="https://i.imgur.com/g2Y9lX0.png" />
        </MetaTags>

        <Hamburger pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <Header />
        <Route exact path="/" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/services" render={() => <Services />} />
        <Route path="/contact" render={() => <Contact />} />
        <Footer />
      </div>
    );
  }
}

export default App;

