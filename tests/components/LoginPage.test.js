import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../src/components/LoginPage';

test('should render Login Page correctly', () => {
    const wrapper = shallow(<LoginPage/>);
    expect(wrapper).toMatchSnapshot();
});

test('should call StartLogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});