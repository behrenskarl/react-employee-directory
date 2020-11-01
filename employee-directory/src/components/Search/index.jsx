import React, { Component } from "react";



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
    };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     API.getUsers(this.state.search)
    //     .then(res => {
    //         if (res.data.status === "error") {
    //             throw new Error(res.data.message);
    //         }
    //         this.setState({ results: res.data.message, error: "" });
    //     })
    //     .catch(err => this.setState({ error: err.message }))
    // };


    render() {
        return (
            <div>
                <input placeholder="Search..." onChange={(event) => this.handleInputChange(event)}/> 
            </div>
        )
      }
}

export default Search;