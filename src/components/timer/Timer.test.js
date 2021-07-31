import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Timer from './Timer';

Enzyme.configure({adapter: new Adapter()});

describe('Timer', function () {
  it('should have a start button', function () {
    const wrapper = shallow(<Timer/>);
    expect(wrapper.find('button').text()).toEqual("Start");
  });
});