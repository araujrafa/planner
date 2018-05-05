import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App Container', () => {
  let wrapper;

  beforeEach(() => {
    fetch
      .once(JSON.stringify([]))
      .once(JSON.stringify([]));

    wrapper = shallow(<App />);
  });

  test('Should have state default', () => {
    expect(wrapper.state('vacationDays')).toBe(0);
    expect(wrapper.state('citys')).toEqual([]);
    expect(wrapper.state('combinations')).toBe('');
    expect(wrapper.state('woeidCity')).toBe('');
    expect(wrapper.state('weather')).toEqual([]);
    expect(wrapper.state('selectsWeather')).toEqual([]);
    expect(wrapper.state('availables')).toEqual([]);
    expect(wrapper.state('show')).toBe(false);
    expect(wrapper.state('error')).toBe(false);
    expect(wrapper.state('selectCity')).toBe('');
  });

  test('Should change state vacationDays', () => {
    const e = {
      target: {
        value: 10
      }
    }
    wrapper.instance().onChangeText(e);
    expect(wrapper.state('vacationDays')).toBe(10);
  });

  test('Should change state woeidCity and selectCity', () => {
    const e = {
      target: {
        value: 1234,
        options: [{
          text: 'test',
        }],
        selectedIndex: 0 
      }
    }
    wrapper.instance().onChangeCity(e);
    expect(wrapper.state('woeidCity')).toBe(1234);
    expect(wrapper.state('selectCity')).toBe('test');
  });

  test('Should change state selectsWeather', () => {
    const e = {
      target: {
        value: 1
      }
    }
    wrapper.instance().toggleCheckboxChange(e);
    expect(wrapper.state('selectsWeather')).toEqual([1]);
  });

  test('Should change state availables, show and error ', () => {
    const data = [{
      date: "2018-01-01",
      temperature: {
        max: 34,
        min: 11,
        unit: "C"
      },
      weather: "thunderstorms",
      woeid: "455821"
      }
    ];
    wrapper.instance().searchResult(data);
    expect(wrapper.state('availables')).toEqual([]);
    expect(wrapper.state('show')).toEqual(true);
    expect(wrapper.state('error')).toEqual(false);
  });

  test('Should change state error', () => {
    const e = {
      target: {
        value: 1
      }
    }
    wrapper.instance().onClickButton(e);
    expect(wrapper.state('error')).toBe(true);
  });
});
