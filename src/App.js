import React, { Component } from 'react';
import './App.css';

import Input from './input/input';
import Service from './service/service';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      services: [
        {name: 'Facebook', address: 'https://facebook.com', image: 'facebook.svg'},
        {name: 'Twitter', address: 'https://twitter.svg', image: 'twitter.svg'},
        {name: 'Instagram', address: 'https://instagram.com', image: 'instagram.svg'},
        {name: 'LinkedIn', address: 'https://linkedin.com', image: 'linkedin.svg'},
        {name: 'Gmail', address: 'https://gmail.google.com', image: 'gmail.svg'},
        {name: 'Outlook', address: 'https://outlook.com', image: 'outlook.svg'},
        {name: 'Github', address: 'https://github.com', image: 'github-logo.svg'}
      ],
      test: ['item1', 'item2']
    };
  }

  render() {

    return (
      <div className="container mt-5">
        <div className="block">

        <div className="servicesList row">
          {this.state.services.map(function(service, index){
            return <Service properties={service} key={index}/>
          })}
        </div>
          <Input />
        </div>
      </div>
    );
  }
}

export default App;
