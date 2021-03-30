import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import getTotalExpenses from '../../src/selectors/expenses-total';
import { ExpensesSummary } from '../../src/components/ExpensesSummary';

test('Should render ExpensesSummary with a singular expense correctly', () => {
    const singularExpense = [expenses[1]];
    const wrapper = shallow(<ExpensesSummary
        expensesCount={singularExpense.length}
        expenseTotal={getTotalExpenses(singularExpense)} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary with multiple expenses correctly', () => {
    const wrapper = shallow(<ExpensesSummary
        expensesCount={expenses.length}
        expenseTotal={getTotalExpenses(expenses)} />);
    expect(wrapper).toMatchSnapshot();
});