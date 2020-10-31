import React, { Component } from "react";
import API from "../../utils/API";
import TableRow from "../TableRows";

class Table extends Component {

    constructor(props) {
        super(props); 
        this.state = { 
            employees: [],
        }
    };

    componentDidMount() {
        API.getUsers()
            .then(res => this.setState({ employees: res.data.results }))
            // .then(res => console.log(res))
            .catch(err => console.log(err));
    };
    

    render() {
        // console.log(this.state);
        if (this.state.employees.length === 0)
            return "loading"
        else {
            return (
                // <div>Hello World!</div>
                <table>
                    <tr>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Cell Phone</th>
                    </tr>
                    {this.state.employees.map((employee) => <TableRow employee={employee} /> )}
                </table>
            )
        }
    };
};

export default Table;
