import React, { Component } from "react";

class TableRow extends Component {
    render() {
        const {
            picture,
            name,
            email,
            cell
        } = this.props.employee;

        return (
            <tr>
                <td>
                <img className="card-img" src={picture.thumbnail} alt="user thumbnail" />
                {!picture.thumbnail && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
                </td>
                <td>{name.first}</td>
                <td>{name.last}</td>
                <td>{email}</td>
                <td>{cell}</td>
            </tr>
        )
    };
};

export default TableRow;