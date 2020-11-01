import React, { Component } from "react";
import API from "../../utils/API";
import TableRow from "../TableRows";
import Image from "../Image";

class Table extends Component {

    constructor(props) {
        super(props); 
        this.state = { 
            employees: [],
            search: ""
        }
    };

    componentDidMount() {
        API.getUsers()
            .then(res => this.setState({ employees: res.data.results }))
            // .then(res => console.log(res))
            .catch(err => console.log(err));
    };
    
    handleInputChange = event => {
        this.setState({ search: event.target.value });
        // console.log(event.target.value);
    };

    render() {
        // console.log(this.state);
        if (this.state.employees.length === 0)
            return "loading"
        else {
            return (
                // <div>Hello World!</div>
                <>
                    <div>
                       <input placeholder="Search..." onChange={(event) => this.handleInputChange(event)}/> 
                    </div>
                    <table class="table table-hover table-dark">
                        <tr>
                            <th scope="row">Image</th>
                            <th scope="row">First Name</th>
                            <th scope="row">Last Name</th>
                            <th scope="row">Email</th>
                            <th scope="row">Cell Phone</th>
                        </tr>
                        {this.state.employees
                            .filter((employee) => Object.values(employee).some((field) => field.includes(this.state.search)))
                            .map((employee) => <TableRow employee={employee} /> )}
                    </table>
                </>
            )
        }
    };
};

export default Table;
