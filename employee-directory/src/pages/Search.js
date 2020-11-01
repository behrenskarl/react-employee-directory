import React, { Component } from "react";
import API from "../utils/API";
import Search from "../components/Search";
import Table from "../components/Table";
import TableRow from "../components/TableRows";

class Directory extends Component {
    state = {
        search: "",
        employees: [],
        results: [],
        error: ""
    };

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
            </div>
        )
    };
};

export default Directory;