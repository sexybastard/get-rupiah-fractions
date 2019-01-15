import React from 'react';
import { shallow } from 'enzyme';
import DisplayResult from './DisplayResult';

describe("Component: DisplayResult should match snapshoot", () => {
  it("Case 1", () => {
    const validateResponse = {
      isValid: false,
      message: 'Invalid format'
    }
    const wrapper = shallow(<DisplayResult validateResponse={validateResponse} />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it("Case 2", () => {
    const result = '5x Rp100000, 1xRp50000, left 12'
    const validateResponse = {
      isValid: true,
      message: ''
    }
    const wrapper = shallow(<DisplayResult result={result} validateResponse={validateResponse} />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
})

describe("Component: DisplayResult should have the correct className and content", () => {
  it('Ensure #result-container to have className result-container', () => {
    let validateResponse = {
      isValid: false
    }
    let wrapper = shallow(<DisplayResult validateResponse={validateResponse} />);
    expect(wrapper.find('#result-container').prop('className')).toEqual('result-container')
  });

  it('Ensure #result-container label to have a correct className', () => {
    let validateResponse = {
      isValid: false
    }
    let wrapper = shallow(<DisplayResult validateResponse={validateResponse} />);
    expect(wrapper.find('#result-container label').prop('className')).toEqual('font-error')

    validateResponse = {
      isValid: true
    }
    wrapper = shallow(<DisplayResult validateResponse={validateResponse} />);
    expect(wrapper.find('#result-container label').prop('className')).toEqual('font-result')
  });

  it('Ensure #result-container label to have a correct text', () => {
    let result = '5x Rp100000, 1xRp50000, left 12'
    let validateResponse = {
      isValid: false,
      message: 'Invalid format'
    }
    let wrapper = shallow(<DisplayResult validateResponse={validateResponse} />);
    expect(wrapper.find('#result-container label').text()).toEqual(validateResponse.message)

    validateResponse = {
      isValid: true,
      message: ''
    }
    wrapper = shallow(<DisplayResult result={result} validateResponse={validateResponse} />);
    expect(wrapper.find('#result-container label').text()).toEqual(result)
  });

});
