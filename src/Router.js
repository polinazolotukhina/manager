import React from 'react';
import { Actions, Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Stack key="auth">
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Please login"
                        initial
                    />
                </Stack>
                <Stack key="main">
                    <Scene
                        rightTitle="Add"
                        onRight={() => {
                            Actions.EmployeeCreate();
                        }}
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        initial
                    />
                    <Scene
                        key="EmployeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee"
                    />
                    <Scene
                        key="EmployeeEdit"
                        component={EmployeeEdit}
                        title="Edit Employee"
                    />
                </Stack>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
