import React, {Component} from 'react';
import './service.css';

class Service extends Component {

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick = () => {
        this.props.onChange(this.props.id);
    }

    render() {
        return (
            <div key={this.props.properties.key} className={"service-item align-center justify-center col-4 " + (this.props.active ? "active" : "inactive") + ' ' + this.props.properties.available} onClick={this.onClick}>
                <div className="service">
                    <img className="service-image" src={'./icons/' + this.props.properties.image} alt="Meaningful description" /> 
                </div>
            </div>
        )
    }
}

export default Service;