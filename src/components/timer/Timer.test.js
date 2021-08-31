import React from 'react';
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-17-updated';
import Timer from './Timer';

Enzyme.configure({adapter: new Adapter()});
jest.useFakeTimers();
const mockOnTimerStart = jest.fn();
const mockOnTimerEnd = jest.fn();

describe('Timer', function () {
  it('should have a start button', function () {
    const wrapper = shallow(<Timer />);
    expect(wrapper.find('button').text()).toEqual("Start");
  });

  it('should start the timer, when the start button is clicked', () => {
    const wrapper = shallow(<Timer maxSeconds={60} onTimerStart={mockOnTimerStart} onTimerEnd={mockOnTimerEnd} />);

    const startButton = wrapper.find('button');
    startButton.simulate('click');

    expect(setInterval).toBeCalledTimes(1);
  });

  it('should call clear interval when remaining seconds is zero', function () {
    const wrapper = mount(<Timer maxSeconds={0} onTimerStart={mockOnTimerStart} onTimerEnd={mockOnTimerEnd} />);

    const startButton = wrapper.find('button');
    startButton.simulate('click');

    expect(clearInterval).toBeCalledTimes(2);
  });

  it('should call on timer end when remaining seconds is zero', function () {
    const wrapper = mount(<Timer maxSeconds={0} onTimerStart={mockOnTimerStart} onTimerEnd={mockOnTimerEnd} />);

    const startButton = wrapper.find('button');
    startButton.simulate('click');

    expect(mockOnTimerEnd).toBeCalledTimes(1);
  });
});