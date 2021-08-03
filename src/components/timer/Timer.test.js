import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Timer from './Timer';

Enzyme.configure({adapter: new Adapter()});
jest.useFakeTimers();

describe('Timer', function () {
  it('should have a start button', function () {
    const wrapper = shallow(<Timer />);
    expect(wrapper.find('button').text()).toEqual("Start");
  });

  it('should start the timer, when the start button is clicked', () => {
    const wrapper = shallow(<Timer maxSeconds={60} />);

    const startButton = wrapper.find('button');
    startButton.simulate('click');

    expect(setInterval).toBeCalledTimes(1);
    expect(setTimeout).toBeCalledWith(expect.any(Function), 60000);
  });
});