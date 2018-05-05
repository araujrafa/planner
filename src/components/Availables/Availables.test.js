import React from 'react';
import Availables from './Availables';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('Availables component', () => {
  const props = {
    availables: [[{date: '2018-02-21'},{date: '2018-03-21'}]],
    show: true, 
    selectCity: 'São Paulo'
  }

  test('Availables changes the class when hovered', () => {;
    const component = renderer.create(
      <Availables {...props}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})