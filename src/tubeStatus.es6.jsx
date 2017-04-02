import React, { Component } from 'react';
import TubeLine from './tubeLine.es6.jsx'

class TubeStatus extends Component {
  constructor(props) {
    super(props);

    const API_URL = "https://api.tfl.gov.uk/line/mode/tube/status"
    const APP_ID  = process.env.TFL_APP_ID
    const APP_KEY = process.env.TFL_APP_KEY

    this.state = {
      statuses: [],
      api_url: API_URL + "?&app_id=" + APP_ID + "&app_key=" + APP_KEY
    };

    this.updateState = this.updateState.bind(this);
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

  updateState(statuses) {
    this.setState({
      statuses: statuses
    })
  }

  render() {
    return (
      <div>
        <h2>Tube status:</h2>
        <div>
          {this.state.statuses.map((line, index) => (
                <TubeLine lineData={line} key={index} />
              ))}
        </div>
      </div>
    );
  }
};

export default TubeStatus;
