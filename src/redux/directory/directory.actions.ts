import { createAsyncAction } from 'typesafe-actions';
import { Directory } from 'MyModel';

export const fetchDirectoriesAsync = createAsyncAction(
    "GET_DIRECTORIES_START",
    "GET_DIRECTORIES_SUCCESS",
    "GET_DIRECTORIES_ERROR"
)<undefined, Directory[], Error>();