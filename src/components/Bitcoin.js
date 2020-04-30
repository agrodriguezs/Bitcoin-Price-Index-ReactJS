import React, { Component } from 'react';
import { Title } from '../components/Title';

export default class Bitcoin extends Component {
  state = { time: {}, disclaimer: '', bpi: {} }

  componentDidMount () {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then( res => res.json())
      .then( data => {
          const { time, disclaimer, bpi } = data
          this.setState({ time,disclaimer, bpi})
      })
  }

  htmlEntities() {
      return String(this).replace(/&amp;/g, '&');
  }
  _renderCurrencies () {
    const { bpi } = this.state
    const currencies = Object.keys(bpi)
    return currencies.map(currency => (
       <div key={currency}>
          <div className='description'>  {bpi[currency].description} </div>
      {bpi[currency].symbol.htmlEntities} {bpi[currency].rate}

          <span> {currency}</span>

      </div>
    ))
  }
/*      "code":"USD",
		   "symbol":"&#36;",
		   "rate":"8,307.1417",
		  "description":"United States Dollar",
		   "rate_float":8307.1417
*/

  render(){
    return (
      <div className='App'>
        <div className='opacity'>
          <Title >Bitcoin Price Index - BPI</Title>
          <div className="date">{this.state.time.updated}</div>
          <div className="currencies">{this._renderCurrencies()}</div>
          <div className="note">{this.state.disclaimer}</div>
        </div>
      </div>
    )
  }
}
