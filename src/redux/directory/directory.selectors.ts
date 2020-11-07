import { createSelector } from 'reselect'
import { RootState } from 'MyTypes';


const selectDirectoryState = (state: RootState) => state.directory

const selectDirectories = createSelector(
    [selectDirectoryState],
    (directory) => directory.directories
)


export const selectIsLoading = createSelector(
    [selectDirectoryState],
    (directory) => directory.isLoading
)

export const selectError = createSelector(
    [selectDirectoryState],
    (directory) => directory.error
)