import getTotalExpenses from '../../src/selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('Should return 0 if no expenses', () => {
    const total = getTotalExpenses([]);
    expect(total).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const total = expenses[0].amount;
    const totalResult = getTotalExpenses([expenses[0]]);
    expect(totalResult).toBe(total);
});

test('Should correctly add up multiple expenses', () => {
    const total = expenses[0].amount + expenses[1].amount;
    const totalResult = getTotalExpenses([expenses[0], expenses[1]]);
    expect(totalResult).toBe(total);
});