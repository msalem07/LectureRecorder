import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm';



export default class App extends Component {

    state = { loggedIn: null }

    componentWillMount() {
        
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyA0Ot7KYBnE__kE_qFuhKhgj3kr9Y_prUA",
                authDomain: "proud-lamp-180322.firebaseapp.com",
                databaseURL: "https://proud-lamp-180322.firebaseio.com",
                projectId: "proud-lamp-180322",
                storageBucket: "proud-lamp-180322.appspot.com",
                messagingSenderId: "300723928552"
              });
        }

        firebase.auth().onAuthStateChanged((user)=> {

            if (user) {
                this.setState({ loggedIn: true});
            }
            else {
                this.setState({ loggedIn: false});
            }
        });

    }

    renderContent() {

        switch (this.state.loggedIn){
            case true:
                return (
                    <View>
                        <CardSection>
                            <Button onPress={()=> firebase.auth().signOut()}>
                                Logout
                            </Button>
                        </CardSection>   
                    </View>
                );
            case false:
                return (
                    <View>
                        <Header headerText="Authentication" />
                        <LoginForm />
                    </View>
                   
                );
            default:
                return <Spinner size="large"/>;
        }
    }

    render() {
        return (
                <View>
                    {this.renderContent()}
                </View>
        )
    }
}