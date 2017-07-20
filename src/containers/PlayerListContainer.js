import PlayerList from '../components/PlayerList';
import PlayerRegister from '../components/PlayerRegister';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as PlayerApi from '../api/PlayerApi';

class PlayerListContainer extends Component {

    componentDidMount() {
      PlayerApi.getPlayers();
    }

    render() {
        return(
          <div>
              <PlayerRegister/>
              <PlayerList players={this.props.players} deletePlayer={PlayerApi.deletePlayer}/>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
    players: state.players
});

export default connect(
    mapStateToProps
)(PlayerListContainer);
