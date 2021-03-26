import React from 'react';
import NotFound  from '../../src/components/NotFound';
import { shallow } from 'enzyme';

test('should render NotFound page correctly', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
})