'use strict';

import ActionTypes from './AppActionTypes';
import AsyncActions from '../utils/AsyncActions';
import Dispatcher from '../dispatcher/AppDispatcher';

const Actions = {
  uploadFile(fileName, isError) {
    if (isError) {
      Dispatcher.dispatch({
        type: ActionTypes.UPLOAD_FILE_ERROR,
        data: {fileName: fileName},
      });
    } else {
      Dispatcher.dispatch({
        type: ActionTypes.UPLOAD_FILE_SUCCESS,
        data: {fileName: fileName},
      });
    }
  },

  getFileList() {
    Dispatcher.dispatch({
      type: ActionTypes.GET_FILE_LIST_DATA,
    });

    AsyncActions.fetchFileList();
  },

  setFileList(files) {
    Dispatcher.dispatch({
      type: ActionTypes.SET_FILE_LIST_DATA,
      data: {files: files},
    });
  },

  getFileData(file) {
    console.log('dispatch GET_FILE_DATA');
    Dispatcher.dispatch({
      type: ActionTypes.GET_FILE_DATA,
    });

    AsyncActions.fetchFileData(file);
  },

  setFileData(fileName, fileData) {
    console.log('dispatch SET_FILE_DATA');
    console.log(fileName);
    console.log(fileData);
    Dispatcher.dispatch({
      type: ActionTypes.SET_FILE_DATA,
      data: {fileName: fileName, fileData: fileData},
    });
  },

  selectFile(file) {
    Dispatcher.dispatch({
      type: ActionTypes.SELECT_FILE,
      data: {fileName: file},
    });
  },

  deleteFile(file) {
    Dispatcher.dispatch({
      type: ActionTypes.DELETE_FILE,
    });

    AsyncActions.deleteFile(file);
  },

  deleteFileSuccess(file) {
    console.log('Dispatcher .. deleteFileSuccess');
    Dispatcher.dispatch({
      type: ActionTypes.DELETE_FILE_SUCCESS,
      data: {fileName: file}
    });
  },

  getColumnsData(file) {
    Dispatcher.dispatch({
      type: ActionTypes.GET_COLUMNS_DATA,
      data: {fileName: file},
    });

    AsyncActions.fetchColumnsData(file);
  },

  setColumnsData(file, columns) {
    Dispatcher.dispatch({
      type: ActionTypes.SET_COLUMNS_DATA,
      data: {fileName: file, columns: columns},
    });
  },

  updateColumnValue(column_id, column_value) {
    Dispatcher.dispatch({
      type: ActionTypes.UPDATE_COLUMN_VALUE,
      data: {column_id: column_id, column_value: column_value},
    });
  },

  getForecastData(dsColumnValue, yColumnValue, selectedFile) {
    Dispatcher.dispatch({
      type: ActionTypes.GET_FORECAST_DATA,
    });

    AsyncActions.fetchForecastData(dsColumnValue, yColumnValue, selectedFile);
  },

  setForecastData(data) {
    Dispatcher.dispatch({
      type: ActionTypes.SET_FORECAST_DATA,
      data: {plotData: data},
    });
  },
};

export default Actions;
