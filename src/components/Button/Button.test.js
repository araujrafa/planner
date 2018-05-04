import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button component', () => {
  test('Button changes the class when hovered', () => {
    const onClick = jest.fn();
  
    const component = renderer.create(
      <Button text={'Buscar'} onClickButton={onClick}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('Button call funtion after click', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button text={'Buscar'} onClickButton={onClick} />);
  
    wrapper.simulate('click');
  
    expect(onClick).toHaveBeenCalledTimes(1);
  });
})