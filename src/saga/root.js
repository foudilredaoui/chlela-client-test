import { all } from 'redux-saga/effects';
import { editorSaga } from '../saga/editor';
import API from '../services/Api'
export default function* rootSaga() {
let api = yield API.create()  
  yield all([
    editorSaga(api),
  ]);
}
