import React, {Component} from 'react';
import { Link } from "react-router-dom";

class ViewStudent extends Component {
    render() {
        return (
            <div>
                <h1 className='blue center pulse'>Student Details</h1>
                <div className="row col s12 right-align">
                    <Link to='/' className='btn blue'>Home</Link>
                </div>
            </div>
        )
    }
}

export default ViewStudent;