import React from 'react';
import ExpenseListItem  from '../../src/components/ExpenseListItem';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with an expense', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]} key={expenses[1].id}/>);
    expect(wrapper).toMatchSnapshot();
})