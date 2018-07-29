import React, { Component } from 'react';
import './App.css';

import Input from './input/input';
import Service from './service/service';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      services: {
        facebook: {name: 'Facebook', address: 'https://facebook.com', image: 'facebook.svg', active: false, available: 'unknown'},
        twitter: {name: 'Twitter', address: 'https://twitter.com/', image: 'twitter.svg', active: true, available: 'unknown'},
        instagram: {name: 'Instagram', address: 'https://instagram.com', image: 'instagram.svg', active: false, available: 'unknown'},
        linkedin: {name: 'LinkedIn', address: 'https://linkedin.com', image: 'linkedin.svg', active: false, available: 'unknown'},
        gmail: {name: 'Gmail', address: 'https://gmail.google.com', image: 'gmail.svg', active: false, available: 'unknown'},
        outlook: {name: 'Outlook', address: 'https://outlook.com', image: 'outlook.svg', active: false, available: 'unknown'},
        github: {name: 'Github', address: 'https://github.com/', image: 'github-logo.svg', active: false, available: 'unknown'}
      },
      username: ''
    }
  }

  onChange = (srv) => {
    let obj = Object.assign({}, this.state.services);
    if(obj[srv].active){
      obj[srv].active = false;
    }else{
      obj[srv].active = true;
    }
    this.setState({obj})
  }

  updateUsername = (unames) => {
    this.setState({username: unames.target.value});
  }

  searchUserName = () => {
    for(let service in this.state.services){
      var obj = Object.assign({}, this.state.services);

      if(this.state.services[service].active){
        obj[service].available = 'waiting';
        this.getUserNameInAddress(obj[service])
          .then(result => console.log(result))
          .catch(error => console.log(error))


        //obj[service].available = 'available';
      }
      this.setState({obj});
    }
  }

  getUserNameInAddress = (service) => {
    return new Promise((resolve, reject) => {
      var xmlHttp = new XMLHttpRequest();

      xmlHttp.open( "GET", service.address + this.state.username, false );
      xmlHttp.send( null );
      let result = xmlHttp;
      if(result.status === 200){
        resolve(result);
      }else{
        reject('Not found');
      }
    })
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
          <Input updateUsername={this.updateUsername} username={this.state.username} searchUserName={this.searchUserName} />
        </div>
      </div>
    );
  }
}

export default App;
