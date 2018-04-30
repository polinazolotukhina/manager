import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text, View } from 'react-native';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Anna"
                        value={this.props.name}
                        onChangeText={text => {
                            this.props.employeeUpdate({
                                prop: 'name',
                                value: text
                            });
                        }}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="444-444-44444"
                        value={this.props.phone}
                        onChangeText={text => {
                            this.props.employeeUpdate({
                                prop: 'phone',
                                value: text
                            });
                        }}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}> Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        style={{ flex: 1 }}
                        onValueChange={text =>
                            this.props.employeeUpdate({
                                prop: 'shift',
                                value: text
                            })
                        }
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};
const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
