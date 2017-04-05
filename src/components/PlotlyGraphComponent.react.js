/* global Plotly */
import React from 'react';


class PlotlyGraphComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPlot() {
    Plotly.newPlot(
      this.props.plotId,
      this.props.plotData,
      {margin: {l:50, t: 0, r:50}}
    );
  }

  componentDidMount() {
    this.renderPlot();
  }

  componentDidUpdate() {
    this.renderPlot();
  }

  render() {
    return (
      <div id={this.props.plotId}></div>
    );
  }
}

export default PlotlyGraphComponent;
