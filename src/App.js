import React from 'react';
import './App.css';
import axios from 'axios';
import QuoteSimpson from './components/QuoteSimpson';

const quoteIni = {
  quote: 'Ahh! Sweet liquor eases the pain.',
  character: 'Troy McClure',
  image:'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112',
}


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote: quoteIni.quote,
      character:quoteIni.character,
      image:quoteIni.image
    };  
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the requests
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data);
        this.setState({
          quote: data[0].quote,
          character: data[0].character,
          image: data[0].image
        });
        console.log(this.state);
    });
  }

 

    render() {
    return (
      <div className="App">
       <QuoteSimpson {...this.state} />
        <button type="button" onClick={this.getQuote}>Get quote</button>
      </div>
    );
  }
}

export default App;
