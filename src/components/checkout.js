import React, {Component} from 'react'
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from './constants/stripe';

const CURRENCY = 'GBP';

const fromGbpToPence = amount => amount * 100;

export default class Checkout extends Component {
  constructor (props){
    super (props);
    this.state = {
      venue: props.venue,
      name: props.name,
      description: props.description,
      amount: 5,
      confirmation: false
    }
  }

  onToken = (token) => {
    let venueId = this.state.venue.id
    const body = JSON.stringify({
      donation: {
        amount: fromGbpToPence(this.state.amount),
        passphrase: this.state.passphrase,
        currency: CURRENCY,
        email: token.email,
        token: token.id
      }
    })

    fetch(`https://enigmatic-badlands-83570.herokuapp.com/api/v1/venues/${venueId}/donations`,{
   
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    }).then(() => {
      alert('Payment Successful');
      this.updateState();
    }).catch(() => {
      alert('Payment Error');
    });
  }

  changeAmount = (event) => {
    this.setState({
      amount: event.target.value
    })
  }

  changePassphrase = (event) => {
    this.setState({
      passphrase: event.target.value
    })
  }

  updateState() {
   this.setState({
     confirmation: true
   })
 }

  render () {
    const { confirmation } = this.state;
    return (
      <div>
          {(confirmation === false) ?
        <div id='fake-form'>
          <h2> FORM </h2>
          <label>Amount:</label>
          <input
            type="text"
            id="amount"
            placeholder="amount"
            onChange={this.changeAmount}
          ></input>
          <label>Passphrase:</label>
          <input
            type="text"
            id="passphrase"
            placeholder = "rhinounicorn"
            onChange={this.changePassphrase}
          ></input>
          <StripeCheckout
            name={this.state.name}
            description={this.state.description}
            amount={fromGbpToPence(this.state.amount)}
            token={this.onToken}
            currency={CURRENCY}
            stripeKey={STRIPE_PUBLISHABLE}
          />
        </div>
        :
        <div>
          <h1>Thanks for your donation</h1>
          <button onClick={() => {window.location = '/'}}>Home</button>
        </div>
        }
      </div>
    )
  }
} 
