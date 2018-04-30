import React, { Component } from 'react';
import { Text, FlatList, TouchableWithoutFeedback, View } from 'react-native';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
import { CardSection } from './common';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeeFetch();
    }
    onRowPress(employee) {
        Actions.EmployeeEdit({ employee });
    }
    render() {
        return (
            <FlatList
                data={this.props.employees}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.onRowPress(item);
                        }}
                    >
                        <View>
                            <CardSection>
                                <Text style={{ fontSize: 18, paddingLeft: 15 }}>
                                    {item.name}
                                </Text>
                            </CardSection>
                        </View>
                    </TouchableWithoutFeedback>
                )}
            />
        );
    }
}
const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
        //to add ID to onject with user information and turn it to ARR
    });
    return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
