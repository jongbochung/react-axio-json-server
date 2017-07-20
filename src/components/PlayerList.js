import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../css/style.css';

const PlayerList = ({players, deletePlayer}) => {
    return (
        <div className="data_table">
            <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Plays</th>
                    <th>Detail</th>
                    <th>Delete</th>
                  </tr>
                      {players.map(player => {
                          return (
                            <tr key={player.id}>
                                 <td>
                                      {player.name}
                                 </td>
                                 <td>
                                      {player.country}
                                 </td>
                                 <td>
                                      {player.plays}
                                 </td>
                                 <td>
                                      <NavLink to={'/players/' + player.id}><button className='btn detail'>Detail</button></NavLink>
                                 </td>
                                 <td>
                                      <button onClick={() => deletePlayer(player.id)} className="btn delete">Delete</button>
                                 </td>
                            </tr>
                          );
                      })}
                </tbody>
            </table>
        </div>
    );
};

PlayerList.propTypes = {
    players: PropTypes.array,
    deletePlayer: PropTypes.func
};

PlayerList.defaultProps = {
    players: [],
    deletePlayer: () => console.warn("deletPLAYER is not defined yet.")
};

export default PlayerList;
