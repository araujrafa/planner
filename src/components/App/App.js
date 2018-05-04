import React, { Component } from 'react';
import request from '../../common/request'

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
      availables: [],
      show: false,
      error: false,
      selectCity: ''
    }
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);    
  }

  componentWillMount() {
    request('http://localhost:8882/weather/', data => {
      this.setState({
        ...this.state,
        weather: data
      })
    });

    request('http://localhost:8882/cities/', data => {
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
      selectCity: e.target.options[e.target.selectedIndex].text
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
    availables.pop();
    this.setState({
      ...this.state,
      availables,
      show: true,
      error:false
    });
  }

  onClickButton(e) {
    if (!this.state.vacationDays || !this.state.woeidCity || !this.state.selectsWeather) {
      this.setState({
        ...this.state,
        error: true,
      });
    } else {
      request(`http://localhost:8882/cities/${this.state.woeidCity}/year/2018`, data => {
        this.searchResult(data);
      });
    }
  }

  render() {
    return (
      <div className="container" style={{maxWidth: '600px', marginTop: '10px'}}>
        <h1>Quantos dias de férias?</h1>
          <Text value={this.state.vacationDays} onChangeText={this.onChangeText} type={'number'} label={'Quantos dias de viagem?'}/>
          <Citys citys={this.state.citys} onChangeCity={this.onChangeCity} label={'Qual será seu destino?'}/>
          <Weather weather={this.state.weather} toggleCheckboxChange={this.toggleCheckboxChange} label={'Escolha agora quais climas você deseja!'}/>
          <Button text={'Buscar'} onClickButton={this.onClickButton} />
        <div className="c-app__container">
        </div>
        <Availables availables={this.state.availables} show={this.state.show} selectCity={this.state.selectCity} />
        {this.state.error ? <div className="alert alert-danger" style={{marginTop: '10px'}}>Por favor, preencha todos os campos</div> : ''}
      </div>
    );
  }
}

export default App;
