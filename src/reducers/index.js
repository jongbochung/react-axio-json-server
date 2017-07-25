import * as types from '../actions/ActionTypes';
import _ from 'lodash';

const initialState = {
    players: [],
    playerDetail: []
};

const PlayerReducer = (state = initialState, action) => {
        switch (action.type) {
        case types.GET_PLAYERS_SUCCESS:
            return Object.assign({}, state, { players: action.players });
        case types.DELETE_PLAYER_SUCCESS:
            const newPlayers = _.filter(state.players, player => player.id !== action.playerId);
            return Object.assign({}, state, { players: newPlayers });
        case types.GET_PLAYER_DETAIL_SUCCESS:
            return Object.assign({}, state, { playerDetail: action.player });
        default:
            return state;
    }
};

export default PlayerReducer;
