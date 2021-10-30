import React,{ Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';

import Navbar from './UI/Navbar';
import Home from './components/Home';
import backgroundVideo from './bg.mp4';
import Footer from './UI/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <Fragment>
      <video autoPlay loop muted id="body_bg">
        <source src={backgroundVideo} type='video/mp4' />
      </video>
      <Navbar />
      <Switch>

      <Route exact path={process.env.PUBLIC_URL + '/'}>
            <Home />
        </Route>

        <Route exact path="/projects">
            <Projects />
        </Route>

        <Route exact path="/about">
            <About />
        </Route>

        <Route exact path="/contact">
            <Contact />
        </Route>

      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
