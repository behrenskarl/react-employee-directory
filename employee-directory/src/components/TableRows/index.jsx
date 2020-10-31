import React, { Component } from "react";

class TableRow extends Component {
    render() {
        const {
            name,
            email,
            cell
        } = this.props.employee;

        return (
            <tr>
                <td>{name.last}</td>
                <td>{email}</td>
                <td>{cell}</td>
            </tr>
        )
    };
};

export default TableRow;