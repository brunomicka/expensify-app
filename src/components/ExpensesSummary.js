import React from 'react';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expenses-total';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesCount, expenseTotal, expenseTotalCount }) => {

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing  <span>{expensesCount}</span>
                    {expensesCount > 1 ? ' expenses ' : ' expense '}
                        totalling <span>{numeral(expenseTotal / 100).format('$0,0.00')}</span>

                </h1>
                {expenseTotalCount &&
                    <div className="page-header__subtitle">
                        <p>
                            Number of hidden expenses: <span>{expenseTotalCount}</span>
                        </p>
                    </div>
                }
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>);

}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const expensesTotalCount = state.expenses.length - visibleExpenses.length; 
    return {
        expensesCount: visibleExpenses.length,
        expenseTotal: getTotalExpenses(visibleExpenses),
        expenseTotalCount: expensesTotalCount === 0 ? undefined : expensesTotalCount
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
