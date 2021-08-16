import React from 'react';
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-17-updated';
import App from './App';

Enzyme.configure({adapter: new Adapter()});

describe('App', function () {
  it('should match snapshot', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should have Timer component', function () {
    const wrapper = mount(<App/>);

    expect(wrapper.find('Timer')).toHaveLength(1);
  });

  it('should have Input bar component', function () {
    const wrapper = mount(<App/>);

    expect(wrapper.find('InputBar')).toHaveLength(1);
  });

  it('should display words bar when timer is running', function () {
    const wrapper = mount(<App/>);

    wrapper.find('button').simulate('click');

    expect(wrapper.find('WordsBar')).toHaveLength(1);
  });
});