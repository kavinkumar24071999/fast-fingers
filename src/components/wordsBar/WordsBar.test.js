import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import WordsBar from './WordsBar';
import words from '../../data/data';

Enzyme.configure({adapter: new Adapter()});

jest.mock('../../data/data', () => {
  return ["test", "one"];
});
describe('WordsBar', function () {
  it('should Display random words', function () {
    global.Math.random = () => .25;

    const wrapper = shallow(<WordsBar/>);

    expect(wrapper.find('.words-bar').text()).toEqual(" one  test ");
  });

  it('should highlight current word when the input word is same as current word', function () {
    const wrapper = shallow(<WordsBar inputWord={'test'}/>);

    expect(wrapper.find('.highlight').at(0).text()).toEqual(' test ');
  });
});