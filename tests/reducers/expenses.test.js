import expensesReducers from '../../src/reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2'
    };

    const state = expensesReducers(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', ()=> {
    const action = {
        type: 'ADD_EXPENSE',
        expense : { 
            id: '4',
            description: 'Mouse',
            note: '',
            amount: 19035,
            createdAt: 0 
        }
    };
    const state = expensesReducers(expenses, action);
    expenses.push(action.expense);

    expect(state).toEqual(expenses);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates : { 
            amount: 19035 
        }
    };

    const state = expensesReducers(expenses, action);
    expect(state[1].amount).toBe(action.updates.amount);
});

test('should not edit expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates : { 
            amount: 19035
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});