import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
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
              website: '',
              alert: ''
        }

        this.onChangeValue = this.onChangeValue.bind(this);
        this.onRegister = this.onRegister.bind(this);
        this.checkInputValues = this.checkInputValues.bind(this);
        this.hideAlert = this.hideAlert.bind(this);
        this.popAlertMessage = this.popAlertMessage.bind(this);

    }

    hideAlert() {
      this.setState({
        alert: null
      });
    }

    popAlertMessage(alertMessage){
        this.setState({ alert : <SweetAlert title= {alertMessage} onConfirm={this.hideAlert} /> });
    }

    onChangeValue(e) {
        let input = e.target.name;
        let value = e.target.value;

        if(input === 'name') {
            this.setState({ name: value });
        } else if(input === 'age') {
            this.setState({ age: value });
        } else if(input === 'dob') {
            this.setState({ dob: value });
        } else if(input === 'country') {
            this.setState({ country: value });
        } else if(input === 'plays') {
            this.setState({ plays: value });
        } else if(input === 'twitter') {
            this.setState({ twitter: value });
        } else if(input === 'website') {
            this.setState({ website: value });
        }
    }

    checkInputValues(inputName, inputValue, regExp) {
        let pattern = new RegExp(regExp);
        let alertMessage = "";
        if(inputValue === null || inputValue ==="") {
            alertMessage = `Please fill out ${inputName}`;
            this.popAlertMessage(alertMessage);
            return false;
        } else if(!pattern.test(inputValue)) {
            if(inputName === 'dob') {
                alertMessage = `You have entered invalid ${inputName}.Format must be DD.MM.YYYY`;
            } else if(inputName === 'country') {
                alertMessage = `You have entered invalid ${inputName}. Please check if country starts with a capital letter.`;
            } else {
                alertMessage = `You have entered invalid ${inputName}.`;
            }

            this.popAlertMessage(alertMessage);
            return false;
        }

        return true;
    }

    onRegister() {
          if(this.checkInputValues("name", this.state.name, "^[A-Za-z ]{3,20}$") &&
             this.checkInputValues("age", this.state.age, "^(1[89]|[2-9][0-9])$") &&
             this.checkInputValues("dob", this.state.dob, "^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)[0-9]{2}$") &&
             this.checkInputValues("country", this.state.country, "^[A-Z][a-z]+$") &&
             this.checkInputValues("twitter", this.state.twitter, "^@([a-zA-Z0-9_]){1,15}$") &&
             this.checkInputValues("website", this.state.website, "^(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9].[^s]{2,})$")
            ) {
               PlayerApi.registerPlayer(this.state.name, this.state.age, this.state.dob, this.state.country, this.state.plays, this.state.twitter, this.state.website);
          }
    }

    render() {
        return(
            <div className = "data_register">
                <div>
                    <input type="text" name = "name" placeholder="Name" onChange={this.onChangeValue}/>
                    <input type="text" name = "age" placeholder="Age" onChange={this.onChangeValue}/>
                    <input type="text" name = "dob" placeholder="DOB (DD.MM.YYYY)" onChange={this.onChangeValue}/>
                    <input type="text" name = "country" placeholder="Country" onChange={this.onChangeValue}/>
                </div>
                <div>
                    <select name="plays" onChange={this.onChangeValue}>
                        <option value="" disabled selected>Choose your option</option>
                        <option value="Right Handed">Right Handed</option>
                        <option value="Left Handed">Left Handed</option>
                    </select>
                    <input type="text" name = "twitter" placeholder="Twitter" onChange={this.onChangeValue}/>
                    <input type="text" name = "website" placeholder="Website" onChange={this.onChangeValue}/>
                    <button className = "btn register" onClick={this.onRegister}>REGISTER</button>
                </div>
                {this.state.alert}
            </div>
        );
    }
}

export default PlayerRegister;
