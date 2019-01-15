import React from 'react';
import { shallow } from 'enzyme';
import InputNumber from './InputNumber';

describe("Component: InputNumber should match snapshoot", () => {
  it("Initial case", () => {
    const wrapper = shallow(<InputNumber />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it("onChange event", () => {
    const wrapper = shallow(<InputNumber />);
    const event = {target: {value: "1"}};
    wrapper.find('#input-container input').first().simulate('change', event);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
})

describe("Component: InputNumber should have the correct className and content", () => {
  it("Ensure #input-container to have a correct className", () => {
    const wrapper = shallow(<InputNumber />);
    expect(wrapper.find('#input-container').prop('className')).toEqual('input-container')
  });

  it("Ensure #input-container input to have a correct className", () => {
    const wrapper = shallow(<InputNumber />);
    expect(wrapper.find('#input-container input').prop('className')).toEqual('input-amount')
  });

  it("Ensure #input-container input to have a correct initial value", () => {
    const wrapper = shallow(<InputNumber />);
    expect(wrapper.find('#input-container input').prop('value')).toEqual('')
  });
});

describe("Component: InputNumber should have the correct state evolution", () => {
  it("Ensure component to have a correct initial state", () => {
    const wrapper = shallow(<InputNumber />);
    expect(wrapper.state('amount')).toBe('')
    expect(wrapper.find('#input-container input').prop('value')).toBe('')
  });

  it("Ensure component to have a correct state after simulate event change", () => {
    const wrapper = shallow(<InputNumber />);
    const event = {target: {value: "1"}};
    wrapper.find('#input-container input').first().simulate('change', event);
    expect(wrapper.state('amount')).toBe(event.target.value)
    expect(wrapper.find('#input-container input').prop('value')).toBe(event.target.value)
  });
});