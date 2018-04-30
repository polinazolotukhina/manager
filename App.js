import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component<{}> {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBLmA_-LUjZ0SdzD6lbwFFtxGSS1rCR1zg',
            authDomain: 'manager-78b24.firebaseapp.com',
            databaseURL: 'https://manager-78b24.firebaseio.com',
            projectId: 'manager-78b24',
            storageBucket: 'manager-78b24.appspot.com',
            messagingSenderId: '544145779947'
        };
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}
export default App;
