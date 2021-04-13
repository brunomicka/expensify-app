import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../src/components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, history, onEdit, onRemove;

beforeEach(() => {
    onEdit = jest.fn();
    onRemove = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            expense={expenses[1]}
            editExpense={onEdit}
            startRemoveExpense={onRemove}
            history={history} />);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onEdit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onEdit).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle onRemove', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onRemove).toHaveBeenLastCalledWith({ id: expenses[1].id });
});