import React, { Component } from 'react';
import fetch from 'node-fetch';
import MainView from './components/MainView.js'
import DetailedView from './components/DetailedView.js'
import Navbar from './components/Navbar.js'
import SettingsView from './components/SettingsView'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsFirstThree: [],
      eventsAll: [
        {
          source_API: 'TicketMaster',
          name: 'Hayes Carll',
          url: 'http://www.ticketsnow.com/InventoryBrowse/TicketList.aspx?PID=2718472',
          event_id: 'Z7r9jZ1Aejbow',
          time_start: '2019-08-11T02:00:00Z',
          time_end: null,
          category: 'Music',
          image: 'https://s1.ticketm.net/dam/a/fc1/e7affb5a-4ba1-4e6f-8aad-29c79f4a6fc1_68981_RECOMENDATION_16_9.jpg',
          venue: 'Gruene Hall',
          location: 'New Braunfels',
          price_min: null,
          price_max: null,
          description: null
        },
        {
          source_API: 'TicketMaster',
          name: 'Trevor Cannon',
          url: 'http://www.ticketsnow.com/InventoryBrowse/TicketList.aspx?PID=2718472',
          event_id: 'Z7r9jZ1Aejboz',
          time_start: '2019-08-11T02:00:00Z',
          time_end: null,
          category: 'Music',
          image: 'https://s1.ticketm.net/dam/a/fc1/e7affb5a-4ba1-4e6f-8aad-29c79f4a6fc1_68981_RECOMENDATION_16_9.jpg',
          venue: 'Gruene Hall',
          location: 'New Braunfels',
          price_min: null,
          price_max: null,
          description: null
        },
        {
          source_API: 'TicketMaster',
          name: 'Hadley Crowl',
          url: 'http://www.ticketsnow.com/InventoryBrowse/TicketList.aspx?PID=2718472',
          event_id: 'Z7r9jZ1Aejbot',
          time_start: '2019-08-11T02:00:00Z',
          time_end: null,
          category: 'Music',
          image: 'https://s1.ticketm.net/dam/a/fc1/e7affb5a-4ba1-4e6f-8aad-29c79f4a6fc1_68981_RECOMENDATION_16_9.jpg',
          venue: 'Gruene Hall',
          location: 'New Braunfels',
          price_min: null,
          price_max: null,
          description: null
        }
      ],
      eventsYesterday: [],
      eventsToday: [],
      eventsTomorrow: [],
      clickedMicroCard: []
    };
    this.api = `http://localhost:8000/api/example`;
  }
  componentDidMount() {

    //This will be a post request, that expects location and returns cardData
    // fetch(this.api)
    //   .then(res => res.json())
    //   .then(events => {
    //     this.setState({ eventsAll: events.data });
    //   });

  }

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact render={() => <MainView events={this.state.eventsAll} />} />
          <Route path='/detailed' exact render={() => <DetailedView events={this.state.eventsAll} />} />
          <Route path='/settings' exact render={() => <SettingsView />} />
        </Switch>
      </Router>
    );
  }
}