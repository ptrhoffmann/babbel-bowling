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

    switch (type) {
        case Constants.ADD_USER: {
            return state.set('players', state.get('players').push(fromJS(playerScore)));
        }

        case Constants.ADD_SCORE: {
            let newState;

            let activePlayer = state.get('activePlayer');
            let activeFrame = state.get('activeFrame');
            let activeRoll = state.getIn(['players', activePlayer, activeFrame, 'activeRoll']);

            //set score for roll
            newState = state.setIn([
                'players',
                activePlayer,
                activeFrame,
                'frameScore',
                activeRoll
            ], payload.score);

            return newState;
        }

        default:
            return state;
    }
}