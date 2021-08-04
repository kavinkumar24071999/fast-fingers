import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import InputBar from './InputBar';

Enzyme.configure({adapter: new Adapter()});

describe('Input bar', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<InputBar />);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should have input field', () => {
    const wrapper = shallow(<InputBar />);

    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('should change input on change of value', () => {
    const wrapper = shallow(<InputBar />);

    const event = {target: {value: 'inp'}};
    wrapper.find('input').simulate('change', event);

    expect(wrapper.find('input').prop('value')).toEqual("inp");
  });

  it('should clear input when the value contains space', () => {
    const wrapper = shallow(<InputBar />);

    const event = {target: {value: 'inp '}};
    wrapper.find('input').simulate('change', event);

    expect(wrapper.find('input').prop('value')).toEqual("");
  });
});
