import React, {Component} from 'react';

class Input extends Component {
    render() {
        return (
            <div className="row mt-5">
               <div className="col-12 form-inline">
                    <div className="form-group mr-1">
                        <input className="form-control" type="text" placeholder="Nome" />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Check</button>
                    </div>
               </div>
            </div>
        )
    }
}

export default Input;