import React, { Component } from "react";
import API from "../utils/API";


class Search extends Component {
    state = {
        search: "",
        employees: [],
        results: [],
        error: ""
    };


    componentDidMount() {
        API.getEmployeeList()
        .then(res => this.setState({ employees: res.data.message }))
        .catch(err => console.log(err));
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
        return 

        
      }
}

export default Search;