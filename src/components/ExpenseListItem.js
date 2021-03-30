import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = ({ description, amount, createdAt, note, id }) => {
    return (
        <div>
            <p><strong>Description:</strong> <Link to={`/edit/${id}`}>{description}</Link></p>
            <p>
                <strong>Amount:</strong> 
                {numeral(amount/100).format('$ 0,0.00')}
            </p>
            <p>
                <strong>Created At:</strong> 
                {moment(createdAt).format('MMMM Do, YYYY')}
            </p>
            <p><strong>Note:</strong> {note}</p>
            <hr />
        </div>
    )
};

export default ExpenseListItem;