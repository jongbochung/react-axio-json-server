
import React from 'react';
import PlayerListContainer from './PlayerListContainer';
import PlayerDetailContainer from './PlayerDetailContainer';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class App extends React.Component {
    render(){
        return (
            <div style={ {textAlign: 'left'} }>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={PlayerListContainer}/>
                        <Route path="/players/:playerId" component={PlayerDetailContainer}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }

}

export default App;
