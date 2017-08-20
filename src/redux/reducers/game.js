import {fromJS} from 'immutable';
import * as Constants from '../constants';

const frame = {
    activeRoll: 0,
    frameScore: [null, null],
    result: null,
};

const lastFrame = {
    activeRoll: 0,
    frameScore: [null, null, null],
    result: null,
};

const playerScore = [frame, frame, frame, frame, frame, frame, frame, frame, frame, lastFrame];

const initialJs = {
    activePlayer: 0,
    activeFrame: 0,
    players: [playerScore]
};

const initialState = fromJS(initialJs);

export default function reducer(state = initialState, {type, payload}) {

    console.log(payload);

    switch (type) {
        case Constants.ADD_USER: {
            return state;
        }

        case Constants.ADD_SCORE: {
            return state;
        }

        default:
            return state;
    }
}