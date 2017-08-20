import * as Constants from '../constants';

export const addUser = () => dispatch => {
    dispatch({
        type: Constants.ADD_USER
    })
};

export const addScore = (score) => dispatch => {
    dispatch({
        type: Constants.ADD_SCORE,
        payload: {
            score: score
        }
    });
};