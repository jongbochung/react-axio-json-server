import React, { Component } from 'react';
import * as PlayerApi from '../api/PlayerApi';

class PlayerRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
              name: '',
              age: '',
              dob: '',
              country: '',
              plays: '',
              twitter: '',
              website: ''
        }

        this.onChangeValue = this.onChangeValue.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }

    onChangeValue(e) {
        let input = e.target.placeholder;
        let value = e.target.value;

        if(input === 'Name') {
            this.setState({ name: value });
        } else if(input === 'Age') {
            this.setState({ age: value });
        } else if(input === 'DOB') {
          console.log(e.target.value);
            this.setState({ dob: value });
        } else if(input === 'Country') {
            this.setState({ country: value });
        } else if(input === 'Plays') {
            this.setState({ plays: value });
        } else if(input === 'Twitter') {
            this.setState({ twitter: value });
        } else if(input === 'Website') {
            this.setState({ website: value });
        }
    }

    onRegister() {
        PlayerApi.registerPlayer(this.state.name, this.state.age, this.state.dob, this.state.country, this.state.plays, this.state.twitter, this.state.website);
    }

    render() {
        return(
            <div className = "data_register">
                <div>
                    <input type="text" placeholder="Name" onChange={this.onChangeValue}/>
                    <input type="text" placeholder="Age" onChange={this.onChangeValue}/>
                    <input type="text" placeholder="DOB" onChange={this.onChangeValue}/>
                    <input type="text" placeholder="Country" onChange={this.onChangeValue}/>
                </div>
                <div>
                    <input type="text" placeholder="Plays" onChange={this.onChangeValue}/>
                    <input type="text" placeholder="Twitter" onChange={this.onChangeValue}/>
                    <input type="text" placeholder="Website" onChange={this.onChangeValue}/>
                    <button className = "btn register" onClick={this.onRegister}>REGISTER</button>
                </div>
            </div>
        );
    }
}

export default PlayerRegister;
