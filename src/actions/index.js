
import * as types from './ActionTypes';

export function getPlayersSuccess(players) {
    return {
        type: types.GET_PLAYERS_SUCCESS,
        players
    };
}

export function deletePlayerSuccess(playerId) {
    return {
        type: types.DELETE_PLAYER_SUCCESS,
        playerId
    };
}

export function getPlayerDetailSuccess(player) {
    return {
        type: types.GET_PLAYER_DETAIL_SUCCESS,
        player
    };
}
