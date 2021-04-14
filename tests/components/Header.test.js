// import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../src/components/Header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />);
    expect(wrapper).toMatchSnapshot();

    //expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should call start logout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});