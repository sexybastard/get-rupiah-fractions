import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe("Component: Header should match snapshoot", () => {
  it("Case with props title set", () => {
    const title = 'Sample title'
    let wrapper = shallow(<Header title={title} />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it("Case with no props", () => {
    let wrapper = shallow(<Header />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
})

describe("Component: Header should have the correct className and content", () => {
  it("Ensure to have a correct className", () => {
    const title = 'Sample title'
    const wrapper = shallow(<Header title={title} />);
    expect(wrapper.find('#title-container').prop('className')).toEqual('title-container')
  });

  it("Ensure to have a correct content text", () => {
    const title = 'Sample title'
    let wrapper = shallow(<Header title={title} />);
    expect(wrapper.find('#title-container h1').text()).toEqual(title)
    wrapper = shallow(<Header />);
    expect(wrapper.find('#title-container h1').text()).toEqual('Default Title')
  });
});
