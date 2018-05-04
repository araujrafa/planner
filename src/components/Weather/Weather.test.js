import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Weather from './Weather';

describe('Weather component', () => {
  const props = {
    weather: [{name: 'Cold'}, {name: 'Hot'}],
    toggleCheckboxChange: jest.fn(),
    label: 'Resultado'
  }

  test('Weather changes the class when hovered', () => {  
    const component = renderer.create(
      <Weather {...props}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Weather call funtion after change', () => {
    const wrapper = shallow(<Weather {...props}/>);
  
    wrapper.find('#Cold').simulate('change');
  
    expect(props.toggleCheckboxChange).toHaveBeenCalledTimes(1);
  });
})