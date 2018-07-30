import React, { Component } from 'react';
import './App.css';

import Input from './input/input';
import Service from './service/service';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      services: {
        facebook: {name: 'Facebook', address: 'https://www.facebook.com/', image: 'facebook.svg', active: false, available: 'unknown'},
        twitter: {name: 'Twitter', address: 'https://twitter.com/users/username_available?username=', image: 'twitter.svg', active: false, available: 'unknown'},
        instagram: {name: 'Instagram', address: 'https://www.instagram.com/', image: 'instagram.svg', active: false, available: 'unknown'},
        linkedin: {name: 'LinkedIn', address: 'https://www.linkedin.com/in/', image: 'linkedin.svg', active: false, available: 'unknown'},
        gmail: {name: 'Gmail', address: 'https://gmail.google.com', image: 'gmail.svg', active: false, available: 'unknown'},
        outlook: {name: 'Outlook', address: 'https://outlook.com', image: 'outlook.svg', active: false, available: 'unknown'},
        github: {name: 'Github', address: 'https://api.github.com/users/', image: 'github-logo.svg', active: false, available: 'unknown'}
      },
      username: 'developmatt'
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
        this.getUserNameInAddress(obj[service])  // eslint-disable-next-line
          .then(available => {
            if(available){
              obj[service].available = 'available';
              this.setState({obj});
            }else{
              obj[service].available = 'unavailable';
              this.setState({obj});
            }
          }) // eslint-disable-next-line
          .catch(error => {
            console.log('Deu erro', error); 
            obj[service].available = 'unavailable';
            this.setState({obj})
          })
      }
    }
  }

  getUserNameInAddress = (service) => {
    return new Promise((resolve, reject) => {
      var xmlHttp = new XMLHttpRequest();

      xmlHttp.open( "GET", service.address + this.state.username, false);
      xmlHttp.send( null );
      let status = false;
      let xmlHttpRequestResponse
      if(xmlHttp.status === 200){
        switch(service.name) {
          case 'Twitter':
            xmlHttpRequestResponse = JSON.parse(xmlHttp.responseText);
            if(xmlHttpRequestResponse.valid){
              status = true;
            }
            break;

          case 'Github':
            xmlHttpRequestResponse = JSON.parse(xmlHttp.responseText);
            break;
          
          case 'Instagram':
            console.log(xmlHttp);
            break;

          default:
            break;
        }
        resolve(status);
      }else if(xmlHttp.status === 404){
        resolve(true);
      }else{
        reject(xmlHttp);
      }
    })
  }

  render() {

    let services = [];
    for (var service in this.state.services){
      services.push(<Service properties={this.state.services[service]} key={service} id={service} active={this.state.services[service].active} onChange={this.onChange}/>)
    }

    return (
      <div className="container">
        <div className="block">
          <div className="servicesList row">
            <div className="col-6">
              <div className="row">
                {services}
              </div>
            </div>

            <div className="col-6 d-flex align-items-center justify-content-center">
            <Input updateUsername={this.updateUsername} username={this.state.username} searchUserName={this.searchUserName} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
