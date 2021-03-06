import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import GraphViewContainer from '../containers/GraphViewContainer';

class DashboardComponent extends React.Component {
  /* eslint-disable no-useless-constructor */
  constructor(props) {
    super(props);
  }
  /* eslint-disable no-useless-constructor */

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} style={{'marginTop': '30px'}}>
            <GraphViewContainer />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default DashboardComponent;
