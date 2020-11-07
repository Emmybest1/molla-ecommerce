import { all, call } from 'redux-saga/effects'
import { directorySaga } from './directory/directory.saga'

export default function* rootSaga() {
    yield all([call(directorySaga)])
}