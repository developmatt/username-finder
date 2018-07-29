import React, {Component} from 'react';
import './service.css';

class Service extends Component {

    render() {

        return (
            <div key={this.props.properties.key} className="serviceItem align-center justify-center col-2">
                <div className="card">
                    <div className="card-body align-center justify-center">
                        <span className="card-title">{this.props.properties.name}</span>
                        <img className="img-fluid card-image" src={'./images/' +  this.props.properties.image} alt="Meaningful description"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Service;