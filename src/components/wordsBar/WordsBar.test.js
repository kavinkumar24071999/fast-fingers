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
});