import axios from 'axios';
import store from '../store';
import { getPlayersSuccess, deletePlayerSuccess, getPlayerDetailSuccess } from '../actions';

export function getPlayers() {
    return axios.get('http://localhost:3001/players')
                .then(response => {
                    store.dispatch(getPlayersSuccess(response.data));
                    return response;
                });
}

export function deletePlayer(playerId) {
    return axios.delete('http://localhost:3001/players/' + playerId)
                .then(response => {
                    store.dispatch(deletePlayerSuccess(playerId));
                    return response;
                });
  }

export function getProfile(playerId) {
    return axios.get('http://localhost:3001/players/' + playerId)
                .then(response => {
                    store.dispatch(getPlayerDetailSuccess(response.data));
                    return response;
                })
}

export function registerPlayer(name, age, dob, country, plays, twitter, website) {
    return axios.post('http://localhost:3001/players', {
                    name: name,
                    age: age,
                    dob: dob,
                    country: country,
                    plays: plays,
                    twitter: twitter,
                    website: website
                })
                .then(response => {
                    getPlayers();
                    return response;
                })
}
