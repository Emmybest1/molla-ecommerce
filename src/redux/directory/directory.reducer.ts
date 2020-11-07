import { ActionType, getType } from 'typesafe-actions'
import { Reducer } from 'redux';
import { fetchDirectoriesAsync } from './directory.actions'
import { Directory } from 'MyModel'


type DirectoryAction = ActionType<typeof fetchDirectoriesAsync>
type initialStateProps = {
    directories: Readonly<Directory[]>,
    directory: Directory | null,
    isLoading: boolean,
    error: unknown
}

const initialState: initialStateProps = {
    directories: [],
    directory: null,
    isLoading: true,
    error: null
}


const directoryReducer: Reducer<initialStateProps, DirectoryAction> = (state = initialState, action): initialStateProps => {

    switch (action.type) {
        case getType(fetchDirectoriesAsync.request):
            return { ...state, isLoading: true }

        case getType(fetchDirectoriesAsync.success):
            return { ...state, isLoading: false, directories: action.payload }

        case getType(fetchDirectoriesAsync.failure):
            return { ...state, isLoading: false, error: action.payload }

        default: return state
    }
}

export default directoryReducer;