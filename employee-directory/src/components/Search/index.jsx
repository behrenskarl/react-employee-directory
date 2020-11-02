import React, { Component } from "react";
import API from "../../utils/API";
import TableRow from "../TableRows";



class Search extends Component {

    constructor(props) {
        super(props); 
        this.state = { 
            employees: [],
            search: ""
        }
    };
    handleInputChange = event => {
        this.setState({ search: event.target.value });
        console.log(event.target.value);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getUsers(this.state.search)
        .then(res => {
            if (res.data.status === "error") {
                throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
        })
        .catch(err => this.setState({ error: err.message }))
    };


    render() {
        return (
            <div>
                <input placeholder="Search..." onChange={(event) => this.handleInputChange(event)}/> 
                {/* {this.state.employees
                            .filter((employee) => Object.values(employee).some((field) => field.includes(this.state.search)))
                            .map((employee) => <TableRow employee={employee} /> )}
                 */}
            </div>
        )
      }
}

export default Search;