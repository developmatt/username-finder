import React, {Component} from 'react';
import './service.css';

class Service extends Component {

    render() {

        return (
            <div key={this.props.properties.key} className="serviceItem align-center justify-center col-2">
                <div className="service">
                    <img className="service-image" src={'./icons/' + this.props.properties.image} alt="Meaningful description" /> 
                </div>
            </div>
        )
    }
}

export default Service;