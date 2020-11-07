import { takeLatest, put, call, all } from "redux-saga/effects";
import { fetchDirectoriesAsync } from "./directory.actions";
import { getDirectories } from "../../data/directory-data";

function* fetchDirectoriesStart() {
    takeLatest(fetchDirectoriesAsync.request, fetchDirectoriesRequest);
}
function* fetchDirectoriesRequest() {
    try {
        const data = yield call(getDirectories);
        yield put(fetchDirectoriesAsync.success(data));
    } catch (error) {
        yield put(fetchDirectoriesAsync.failure(error))
    }
}
export function* directorySaga() {
    yield all([call(fetchDirectoriesStart)])
}