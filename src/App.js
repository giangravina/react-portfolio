import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Navbar from './components/Navbar/Navbar';
import './App.css';


import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Gian Gravina's Portfolio",
      headerLinks: [

        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Be Innovative.',
        subTitle: 'Creating Projects that Make a Difference',
        text: 'Check Out My Projects Below'
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Let\'s Talk',
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar />
          <Switch>



          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

          </Switch>
          <Footer />
        </Container>
      </Router>

       
    );
  }
}

export default App;
