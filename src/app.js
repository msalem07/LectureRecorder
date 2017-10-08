import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header, Button, CardSection, Spinner, PopUpList } from './components/common';
import LoginForm from './components/LoginForm';

const store = createStore(reducers);

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
                    <View style={{flex: 1 }}>
                        <PopUpList/>
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
            <Provider store={store}>
                <View style={{flex: 1}}>
                    {this.renderContent()}
                </View>
            </Provider>
        )
    }
}