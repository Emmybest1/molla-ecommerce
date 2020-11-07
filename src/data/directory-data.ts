import axios from 'axios';
import { Directory } from 'MyModel';

export const getDirectories = (): Promise<Directory[]> => {
    return axios.get("/directory?_sort=title").then(response => {
        return response.data;
    }).catch(error => {
        throw error;
    })
}
