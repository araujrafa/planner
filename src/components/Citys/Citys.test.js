import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Citys from './Citys';

describe('Citys component', () => {
  const props = {
    citys: [{district: 'São Paulo', woeid: '1'}, {district: 'Rio de Janeiro', woeid: '2'}],
    onChangeCity: jest.fn(),
    label: 'Escolha a cidade'
  }

  test('Citys changes the class when hovered', () => {  
    const component = renderer.create(
      <Citys {...props}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Citys call funtion after change', () => {
    const wrapper = shallow(<Citys {...props}/>);
  
    wrapper.find('select').simulate('change');
  
    expect(props.onChangeCity).toHaveBeenCalledTimes(1);
  });
})