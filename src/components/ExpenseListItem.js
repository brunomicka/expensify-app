import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ description, amount, createdAt, note, id }) => {
    return (
        <div>
            <p><strong>Description:</strong> <Link to={`/edit/${id}`}>{description}</Link></p>
            <p><strong>Amount:</strong> ${amount}</p>
            <p><strong>Create At:</strong> {createdAt}</p>
            <p><strong>Note:</strong> {note}</p>
            <hr />
        </div>
    )
};

export default ExpenseListItem;