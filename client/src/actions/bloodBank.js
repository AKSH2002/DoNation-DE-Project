import * as api from '../api';

//action creators
export const getData = () => async (dispatch) => {
    try{
        const { data } = await api.fetchData();

        dispatch({type:'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }  
}

export const createData = (data) => async(dispatch) => {
    try{
        const { post } = await api.createData(data);

        dispatch({type:'CREAT', payload: post });

    } catch (error) {
        console.log(error);
    }  
}