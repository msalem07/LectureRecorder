import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';


export default class LoginForm extends Component {

    state = { email: "", password: "", error: "", loading: false };

    onButtonPressed() {

        const { email, password } = this.state;

        this.setState({ error: "", loading: true });
        setTimeout(()=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.onLoginSuccess() })
            .catch((error) => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => this.onLoginSuccess())
                    .catch((error) => this.onLoginFailure())
            });
        },3000);
    }

    onLoginSuccess() {
        this.setState({ email: "", password: "", error: "", loading: false });
    }

    onLoginFailure() {
        this.setState({ error: 'Authentication Failed.', loading: false });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        return (
            <Button onPress={() => this.onButtonPressed()}>
                Log In
            </Button>
        )
    }
    render() {

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
};

const styles = {
    errorTextStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'red'
    }
}