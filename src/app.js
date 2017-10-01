import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {

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
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        )
    }
}