import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import WordsBar from './WordsBar';

Enzyme.configure({adapter: new Adapter()});

const randomWords = ["test", "one"];

describe('WordsBar', function () {
  it('should Display random words', function () {
    const wrapper = shallow(<WordsBar
      randomWords={randomWords} wordIndex={0} wordPermanentStyle={{}} />);

    expect(wrapper.find('.words-bar').text()).toEqual(" test  one ");
  });

  it('should set class name as highlight-correct when the input word is same as current word', function () {
    const wrapper = shallow(<WordsBar inputWord={'test'}
      randomWords={randomWords} wordIndex={0} wordPermanentStyle={{}}/>);

    expect(wrapper.find('.highlight-correct').at(0).text()).toEqual(' test ');
  });

  it('should set class name as highlight-correct when input word is part of the current word', function () {
    const wrapper = shallow(<WordsBar inputWord={'tes'}
      randomWords={randomWords} wordIndex={0} wordPermanentStyle={{}}/>);

    expect(wrapper.find('.highlight-correct').at(0).text()).toEqual(' test ');
  });

  it('should set class name as highlight-wrong when the input word is not same as the current word', () => {
    const wrapper = shallow(<WordsBar inputWord={'tea'}
      randomWords={randomWords} wordIndex={0} wordPermanentStyle={{}}/>);

    expect(wrapper.find('.highlight-wrong').at(0).text()).toEqual(' test ');
  });
});