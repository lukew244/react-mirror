import React, { Component } from 'react';

class TubeLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lineData: this.props.lineData
    };
  }

  render() {
    return (<p>{this.state.lineData.id} : {this.state.lineData.lineStatuses[0].statusSeverityDescription}</p>);
  }
};

export default TubeLine;
