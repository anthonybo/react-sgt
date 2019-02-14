import React, {Component} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import {formatPostData} from '../helpers';

class ViewStudent extends Component {
    state = {
        student: {}

    }

    async componentDidMount() {
        const studentId = formatPostData({
            id: this.props.match.params.id
        });
        const studentData = await axios.post('/server/getstudentdetails.php', studentId);
        
        this.setState({
            student: studentData.data.data
        });
    }

    render() {
        const { name, course, notes, instructor, grade, added } = this.state.student;

        return (
            <div>
                <h1 className='blue center pulse'>Student Details</h1>
                <div className="row col s12 right-align">
                    <Link to='/' className='btn blue'>Home</Link>
                </div>
                <h3 className='center'>{name}</h3>
                <h5 className='center red-text'>Grade: {grade}</h5>
                <h5 className='center'>Course: {course}</h5>
                <h5 className='center'>Instructor: {instructor}</h5>
                <h5 className='center'>Notes: {notes}</h5>
                <div className='center black container'>
                    <h6 className='center grey-text'>Date Added: {added}</h6>
                </div>
            </div>
        )
    }
}

export default ViewStudent;