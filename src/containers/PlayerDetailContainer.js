import React, { Component } from 'react';
import PlayerDetail from '../components/PlayerDetail';
import * as PlayerApi from '../api/PlayerApi';
import { connect } from 'react-redux';

class PlayerDetailContainer extends Component {

    componentDidMount() {
        let playerId = this.props.match.params.playerId;
        console.log(this.props.match.params.playerId);
        PlayerApi.getProfile(playerId);
    }

    render() {
        return(
            <div>
                  <PlayerDetail player={this.props.player} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    player: state.playerDetail
});

export default connect(
    mapStateToProps
)(PlayerDetailContainer);
