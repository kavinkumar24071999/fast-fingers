import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import WordsBar from './WordsBar';

Enzyme.configure({adapter: new Adapter()});

const randomWords = ["test", "one"];

describe('WordsBar', function () {
  it('should Display random words', function () {
    const wrapper = shallow(<WordsBar randomWords={randomWords}/>);

    expect(wrapper.find('.words-bar').text()).toEqual(" test  one ");
  });

  it('should highlight current word when the input word is same as current word', function () {
    const wrapper = shallow(<WordsBar inputWord={'test'} randomWords={randomWords} wordIndex={0}/>);

    expect(wrapper.find('.highlight').at(0).text()).toEqual(' test ');
  });

  it('should highlight current word when the input word is part of the current word', function () {
    const wrapper = shallow(<WordsBar inputWord={'tes'} randomWords={randomWords} wordIndex={0}/>);

    expect(wrapper.find('.highlight').at(0).text()).toEqual(' test ');
  });
});