import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({navigation}) => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('blur', clearErrorMessage);
        return unsubscribe;
      }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <AuthForm 
                headerText='Sign in for Tracker'
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText='Sign in'
            />
            <NavLink
                routeName='SignupScreen'
                linkText='Not yet signed up? Create an account.'
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

export default SigninScreen;