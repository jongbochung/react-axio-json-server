import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PlayerDetail = ({player}) => {

      return(
          <div className="player_detail">
              <div>
                  <Link to={'/'}><button className="btn list">List</button></Link>
              </div>
              <div>
                  <table className="detail_table">
                      <tbody>
                          <tr>
                            <td>Name</td>
                            <td>{player.name}</td>
                          </tr>
                          <tr>
                            <td>Age</td>
                            <td>{player.age}</td>
                          </tr>
                          <tr>
                            <td>DOB</td>
                            <td>{player.dob}</td>
                          </tr>
                          <tr>
                            <td>Country</td>
                            <td>{player.country}</td>
                          </tr>
                          <tr>
                            <td>Plays</td>
                            <td>{player.plays}</td>
                          </tr>
                          <tr>
                            <td>Twitter</td>
                            <td>{player.twitter}</td>
                          </tr>
                          <tr>
                            <td>Website</td>
                            <td>{player.website}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      );
}

PlayerDetail.propTypes = {
    website: PropTypes.string,
    twitter: PropTypes.string,
};

PlayerDetail.defaultProps = {
    website: '',
    twitter: ''
};

export default PlayerDetail;
