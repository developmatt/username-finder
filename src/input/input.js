import React, {Component} from 'react';

class Input extends Component {

    searchUserName = (e) => {
        e.preventDefault();
        this.props.searchUserName();
    }   

    render() {
        return (
            <div className="row">
               <form className="col-12 form-inline">
                    <div className="form-group mr-1">
                        <input className="form-control" type="text" placeholder="Username" value={this.props.username} onChange={this.props.updateUsername}/>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-secondary" onClick={this.searchUserName}>Check</button>
                    </div>
               </form>
            </div>
        )
    }
}

export default Input;