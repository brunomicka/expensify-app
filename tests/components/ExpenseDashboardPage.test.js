import React from 'react';
import ExpenseDashboardPage  from '../../src/components/ExpenseDashboardPage';
import { shallow } from 'enzyme';

test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
})