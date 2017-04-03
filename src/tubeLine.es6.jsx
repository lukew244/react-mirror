import React, { Component } from 'react';

class TubeLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lineData: this.props.lineData
    };

    this.tubeLineColour = this.tubeLineColour.bind(this);
  }

  tubeLineColour(line) {
    var tubeLineColours = {
      'bakerloo'            :	'#B36305',
      'central'             : '#E32017',
      'circle'              : '#FFD300',
      'district'            :	'#00782A',
      'DLR'                 : '#00A4A7',
      'hammersmith-city'    : '#F3A9BB',
      'jubilee' 	          : '#A0A5A9',
      'metropolitan'        : '#9B0056',
      'northern' 	          : '#000000',
      'overground' 	        : '#EE7C0E',
      'piccadilly' 	        : '#003688',
      'tramlink' 	          : '#84B817',
      'victoria' 	          : '#0098D4',
      'waterloo-city'      	: '#95CDBA',
    };

    return (tubeLineColours[line]);
  }

  render() {
    var style = {
      background: this.tubeLineColour(this.state.lineData.id),
    }

    return (
      <tr>
        <td style={style}>{this.state.lineData.id} </td>
        <td>{this.state.lineData.lineStatuses[0].statusSeverityDescription}</td>
      </tr>
    );
  }
};

export default TubeLine;
