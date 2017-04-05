import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super(props);

    const API_URL = "http://api.openweathermap.org/data/2.5/weather"
    const APP_ID  = process.env.REACT_APP_OWM_APP_ID
    const LOCALE  = "London"

    this.state = {
      weather: null,
      api_url: API_URL + "?q=" + LOCALE + "&appid=" + APP_ID
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

  render() {
    if (this.state.weather) {
      return (
        <div>
          <p>{this.state.weather.name}</p>
          <p>{this.state.weather.weather[0].description}</p>

        </div>
      );
    } else return null
  }
};

export default Weather;
