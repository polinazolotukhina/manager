import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, View, Text } from 'react-native';

import { emailChange, passwordChange, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChange(text);
    }
    onPasswordChange(text) {
        this.props.passwordChange(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorText}>{this.props.error}</Text>
                </View>
            );
        }
    }
    renderButton() {
        console.log('loading', this.props.loading);
        if (this.props.loading === true) {
            return <Spinner size="large" />;
        }
        return <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>;
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@email.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntery
                        label="password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>{this.renderButton()}</CardSection>
            </Card>
        );
    }
}
const styles = {
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
const MapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return {
        email,
        password,
        error,
        loading
    };
};
export default connect(MapStateToProps, {
    emailChange,
    passwordChange,
    loginUser
})(LoginForm);
