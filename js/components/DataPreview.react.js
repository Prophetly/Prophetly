'use strict';

import React from 'react';

import AppActions from '../actions/AppActions';

import { AutoSizer, Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once


class PreviewPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="border p-1">
        <button className="btn btn-sm right" type="button">Download</button>
      </div>
    );
  }
}

class DataPreviewComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  _rowClassName ({ index }) {
    if (index < 0) {
      return "headerRow"
    } else {
      return index % 2 === 0 ? "evenRow" : "oddRow"
    }
  }

  render() {
    const rowList = this.props.fileRows.toJS();
    const rowColumns = this.props.fileColumns.toJS();

    console.log(rowList, rowColumns);

    if (rowList.length === 0 && rowColumns.length === 0) {
      return (
        <div>
          <div className="blankslate blankslate-spacious">
            <h3>Upload and select a dataset</h3>
            <p>Watch the preview</p>
          </div>
        </div>
      );
    } else {
      return (
        <AutoSizer>
          {({ width }) => (
            <Table
              headerHeight={40}
              height={window.innerHeight}
              rowCount={rowList.length}
              rowGetter={({ index }) => rowList[index]}
              rowHeight={30}
              width={width}
              rowClassName={this._rowClassName}
            >
              {
                rowColumns.map((col) => (
                  <Column
                    label={col}
                    dataKey={col}
                    key={col}
                    width={100}
                  />
                ))
              }
            </Table>
          )}
        </AutoSizer>
      );
    }
  }
}

export default DataPreviewComponent;
