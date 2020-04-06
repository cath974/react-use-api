import React from 'react';
import './App.css';
import axios from 'axios';
import QuoteSimpson from './components/QuoteSimpson';

const quoteIni = [{
  quote: 'Ahh! Sweet liquor eases the pain.',
  character: 'Troy McClure',
  image:'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112',
}]


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = [{
        quoteAlea: quoteIni
      }];  
    
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the requests
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          quoteAlea: data.results
        });
    });
  }

    render() {
    return (
      <div className="App">
        <QuoteSimpson quoteAlea={this.state.quoteAlea[0]} />
        <button type="button" onClick={this.getQuote}>Get quote</button>
      </div>
    );
  }
}

export default App;
