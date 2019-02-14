import React, {Component} from 'react';
import StudentRow from './student_row';
import axios from "axios";
import { Link } from 'react-router-dom';
import {formatPostData} from "../helpers";

class Table extends Component {
    state = {
        students: []
    };

    componentDidMount() {
        this.getStudentData();
    }

    deleteStudent = async (id) => {
        const formattedId = formatPostData({id: id});

        await axios.post('/server/deletestudent.php', formattedId);

        this.getStudentData();
    }

    async getStudentData() {
        // Call Server to get student data

        const resp = await axios.get('/server/getstudentlist.php');

        this.setState({
            students: resp.data.data || []
        })

        // if (resp.data.success) {
        //     this.setState({
        //         students: resp.data.data
        //     });
        // } else {
        //     this.setState({
        //         students: []
        //     })
        // }

        // OLD METHOD
        // axios.get('http://localhost/server/getstudentlist.php').then( (response)=> {
        //     console.log('Server Response: ', response);
        //
        //     this.setState({
        //         students: response.data.data
        //     });
        // });
    }
    
    render() {
        const { students } = this.state;
        let studentRows = [];

        if (Array.isArray(students) && students.length) {
            studentRows = students.map((student) => {
                return <StudentRow delete={this.deleteStudent} key={student.id} student={student}/>
            });
        } else {
            studentRows.push(
                <tr key='no-data'>
                    <td colSpan='4'>
                        <h4 className='center grey-text'>No Student Data Available</h4>
                    </td>
                </tr>
            )
        }

        return (
            <div>
                <h1 className='deep-orange darken-3 pulse center'>Student Grade Table</h1>

                <div className='row'>
                    <div className="col s12 right-align">
                        <Link className='btn blue waves-effect waves-light' to='/add-student'>Add Student</Link>
                    </div>
                </div>

                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Grade</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {studentRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;