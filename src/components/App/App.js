import React, { Component } from 'react';
import './App.css';

import Button from '../Button/Button';
import Citys from '../Citys/Citys';
import Weather from '../Weather/Weather';
import Text from '../Text/Text';
import Availables from '../Availables/Availables';

class App extends Component {
  constructor() {
    super();
    this.state = {
      vacationDays: 0,
      citys: [],
      combinations: '',
      woeidCity: '',
      weather: [],
      selectsWeather: [],
      availables: []
    }
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);    
  }

  componentWillMount() {
    fetch('http://localhost:8882/weather/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          ...this.state,
          weather: data
        })
      });

    fetch('http://localhost:8882/cities/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          ...this.state,
          citys: data
        })
      });
  }

  onChangeText(e) {
    this.setState({
      ...this.state,
      vacationDays: e.target.value,    
    });
  }

  onChangeCity(e) {
    this.setState({
      ...this.state,
      woeidCity: e.target.value,    
    });
  }

  toggleCheckboxChange(e) {
    let selects = this.state.selectsWeather;
    const value = selects.includes(e.target.value);

    if (value) {
      selects.splice(selects.indexOf(e.target.value), 1)
    } else {
      selects.push(e.target.value)
    }

    this.setState({
      ...this.state,
      selectsWeather: selects
    });
  }

  searchResult(data) {
    const vacationDays = this.state.vacationDays;
    const selectsWeather = this.state.selectsWeather;
    const selectCity = this.state.woeidCity;
    let availables = [[]];
    let flag = false;
    let i = 0;
    let aux = 0;

    for (i in data) {
      let a = 0;
      for (a in selectsWeather) {
        if (selectsWeather[a] === data[i].weather) {
          availables[aux].push(data[i]);
          flag = true;
        }
        flag = flag ? true : false;
      }
      if (availables[aux].length <= vacationDays && !flag) {
        availables[aux] = []
      } else if (availables[aux].length >= vacationDays && !flag) {
        aux++;
        availables.push([]);
      }
      flag = false;
    }
    this.setState({
      ...this.state,
      availables
    });
  }

  onClickButton(e) {
    fetch(`http://localhost:8882/cities/${this.state.woeidCity}/year/2018`)
      .then(response => response.json())
      .then(data => {
        this.searchResult(data);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Quantos dias de férias?</h1>
        <Text value={this.state.vacationDays} onChangeText={this.onChangeText} type={'number'} />
        <Citys citys={this.state.citys} onChangeCity={this.onChangeCity} />
        <Weather weather={this.state.weather} toggleCheckboxChange={this.toggleCheckboxChange}/>
        <Button text={'Buscar'} onClickButton={this.onClickButton} />
        <Availables availables={this.state.availables} />
      </div>
    );
  }
}

export default App;
