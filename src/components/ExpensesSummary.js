import React from 'react';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expenses-total';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesCount, expenseTotal }) => {

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing  <span>{expensesCount}</span>
                    {expensesCount > 1 ? ' expenses ' : ' expense '}
     totalling <span>{numeral(expenseTotal / 100).format('$0,0.00')}</span></h1>

                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>);

}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expenseTotal: getTotalExpenses(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
