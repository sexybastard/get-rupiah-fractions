import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe("Component: App", () => {
  it('App renders correctly without data', () => {
    shallow(<App />);
  });
});

describe("Component: App should match snapshoot", () => {
  it("Initial case", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
})

describe("Component: App should have the correct state evolution", () => {
  it("Ensure component to have a correct initial state", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('result')).toBe('')
    expect(wrapper.state('validateResponse')).toEqual({})
  });
});

describe("Component: App should have the correct className", () => {
  it("Ensure Component to have a correct className", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#main').prop('className')).toEqual('main')
    expect(wrapper.find('#container').prop('className')).toEqual('container')
  });
});