import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new Adapter()});

describe('App', function () {
  it('should have home page', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header').text()).toEqual('Learn React');
    expect(wrapper.html()).toMatchSnapshot();
  });
});