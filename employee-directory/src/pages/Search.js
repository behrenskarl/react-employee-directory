import React, { Component } from "react";
import API from "../utils/API";
import Search from "../components/Search";
import Table from "../components/Table";
import TableRow from "../components/TableRows";

class Directory extends Component {
    // state = {
    //     search: "",
    //     employees: [],
    //     results: [],
    //     error: ""
    // };

    // componentDidMount() {
    //     API.getUsers()
    //         .then(res => this.setState({ employees: res.data.results }))
    //         // .then(res => console.log(res))
    //         .catch(err => console.log(err));
    // };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
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

                    <Search />
                    <Table />
                    {/* {this.state.employees
                        .filter((employee) => Object.values(employee).some((field) => field.includes(this.state.search)))
                        // .map((employee) => <TableRow employee={employee} /> )}
                    } */}

                </div>
            )
    };
};

export default Directory;