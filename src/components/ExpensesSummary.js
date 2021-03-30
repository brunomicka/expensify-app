import React from 'react';
import selectExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expenses-total';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpensesSummary = ({expensesCount, expenseTotal}) => {

    return (
        <div>
            <h3>Viewing  {expensesCount}
                {expensesCount > 1 ? ' expenses ' : ' expense '}
             totalling {numeral(expenseTotal/100).format('$0,0.00')}</h3>
        </div>);

}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expenseTotal : getTotalExpenses(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
