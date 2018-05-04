import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Text from './Text';

describe('Text component', () => {
  const props = {
    value: '',
    onChangeText: jest.fn(),
    label: 'Quantidade de dias',
    type: 'number'
  }

  test('Text changes the class when hovered', () => {  
    const component = renderer.create(
      <Text {...props}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Text call funtion after change', () => {
    const wrapper = shallow( <Text {...props}/>);
  
    wrapper.find('input').simulate('change');
  
    expect(props.onChangeText).toHaveBeenCalledTimes(1);
  });
})