import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super(props);

    const API_URL   = "http://api.openweathermap.org/data/2.5/weather"
    const ICON_URL  = "http://openweathermap.org/img/w/"
    const APP_ID    = process.env.REACT_APP_OWM_APP_ID
    const LOCALE    = "London"

    this.state = {
      weather: null,
      api_url: API_URL + "?units=metric&q=" + LOCALE + "&appid=" + APP_ID,
      icon_url: ICON_URL
    };
  }

  componentDidMount() {
    this.getData();
    this.timerID = setInterval(
      () => this.getData(), 600000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getData () {
    fetch(this.state.api_url).then(r => r.json())
    .then((data) => {this.updateState(data)})
    .catch(e => console.log("Error"))
  }

  updateState(weather) {
    this.setState({
      weather: weather
    })
  }

  weatherIcon() {
    var icon = this.state.icon_url + this.state.weather.weather[0].icon + ".png"
    return (
      <img src={icon} alt="weather icon"></img>
    );
  }

  render() {
    if (this.state.weather) {
      return (
        <div className="weather-widget">
          {this.weatherIcon()}
          <br />
          {this.state.weather.weather[0].description}, {this.state.weather.main.temp}&deg;C
          <br />

        </div>
      );
    } else {
      return (
        <p>Weather data is unavailable</p>
      );
    }
  }
};

export default Weather;
