import React, {Component} from 'react';
import SignUp from './venueSignup'
import SignIn from './venueSignin'
import VenueProfile from './venueProfile'

export default class VenuePortal extends Component {
  constructor() {
    super();
    this.state = {
      process: false,
      loggedIn: false,
      venue: null
      }
      this.setVenue = this.setVenue.bind(this);
    }

    _changeProcess(process){
      this.setState({
        process: process,
      })
    }

    _onLogoutClick() {
      this.setState({
        process: false,
        loggedIn: false,
        venue: null
      })
    }

    setVenue(venue) {
    this.setState({
        loggedIn: true,
        venue: venue
    });
  }

    render() {

     const { venue, loggedIn } = this.state;

      return (
        <div>
          {loggedIn ?
            <div>
              <button id='log_out_button' onClick={()=> { this._onLogoutClick() } }>Log out</button>
              <VenueProfile venue={venue} />
            </div>
            :
            <div id="login_buttons">
              <button onClick={() => {window.location = '/'}}>Home</button>
              <button id='sign_up_button' onClick={()=> { this._changeProcess('signup') } }>Sign Up</button>
              <button id='sign_in_button'onClick={()=> { this._changeProcess('signin') } }>Sign In</button>

              { this.state.process === 'signup' &&
              < SignUp action={this.setVenue} /> }

              {this.state.process === 'signin' &&
              < SignIn action={this.setVenue} /> }
            </div>
          }
        </div>
      );
   }
}
