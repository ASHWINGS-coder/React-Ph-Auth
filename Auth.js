import React, { Component } from 'react'
import firebase from './firebase'
import {Redirect} from 'react-router-dom'

export class Auth extends Component {
    constructor(){
        super();
        this.state={
            phnum:"",
            login:false
        }
    }

    handelChange = (event) => {
        this.setState({phnum : event.target.value})
    }

    handleClick = (event) => {
        event.preventDefault();
        var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
        var number = "+91"+this.state.phnum;
        console.log(this.state.phnum)
        firebase.auth().signInWithPhoneNumber(number, recaptcha).then((e) => {
            var code = prompt('Enter the otp', '');

            if (code === null) return;

            e.confirm(code).then( (result) => {
                console.log(result.user);
                document.querySelector('label').textContent += result.user.phoneNumber + "Number verified";
                this.setState({
                    login:true
                })
            }).catch(function (error) {
                console.error(error);

            });
        })
            .catch(function (error) {
                console.error(error);

            });
    }
    render() {
        const {login} = this.state;
        if(login){
            return <Redirect push to="/home1"/> 
        }else{
            return(
            <div class="input">
                <label></label>
                <div id="recaptcha"></div>
                <form onSubmit={this.handleClick}>
                <input type="number" placeholder="Enter valid Phone Number" onChange={this.handelChange}/>
                <button type="submit">Click Me</button>
            </form>
            </div>
         
            )
        }
    }
}

export default Auth