import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('blur', clearErrorMessage);
        return unsubscribe;
      }, [navigation]);


    return (
        <SafeAreaView style={styles.container}>
            <AuthForm 
                headerText='Sign up for Tracker'
                errorMessage={state.errorMessage}
                onSubmit={signup}
                submitButtonText='Sign up'
            />
            <NavLink
                routeName='SigninScreen'
                linkText='Already signed up? Sign in.'
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 50,
    },
});

export default SignupScreen;