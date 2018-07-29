import React, { Component } from 'react';
import './App.css';

import Input from './input/input';
import Service from './service/service';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      services: {
        facebook: {name: 'Facebook', address: 'https://facebook.com', image: 'facebook.svg', active: false},
        twitter: {name: 'Twitter', address: 'https://twitter.svg', image: 'twitter.svg', active: false},
        instagram: {name: 'Instagram', address: 'https://instagram.com', image: 'instagram.svg', active: false},
        linkedin: {name: 'LinkedIn', address: 'https://linkedin.com', image: 'linkedin.svg', active: false},
        gmail: {name: 'Gmail', address: 'https://gmail.google.com', image: 'gmail.svg', active: false},
        outlook: {name: 'Outlook', address: 'https://outlook.com', image: 'outlook.svg', active: false},
        github: {name: 'Github', address: 'https://github.com', image: 'github-logo.svg', active: false}
      }
    }
  }

  onChange = (valor) => {
    let obj = Object.assign({}, this.state.services);
    if(obj[valor].active){
      obj[valor].active = false;
    }else{
      obj[valor].active = true;
    }
    this.setState({obj})
  }

  render() {

    let services = [];
    for (var service in this.state.services){
      services.push(<Service properties={this.state.services[service]} key={service} id={service} active={this.state.services[service].active} onChange={this.onChange}/>)
    }

    return (
      <div className="container mt-5">
        <div className="block">
        <div className="servicesList row">
          {services}
        </div>
          <Input />
        </div>
      </div>
    );
  }
}

export default App;
