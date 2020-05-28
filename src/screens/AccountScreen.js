import React,{ useContext } from 'react';
import {Button, Text, StyleSheet, View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = ({navigation}) => {
    const {signout} = useContext(AuthContext);

    return (
        <View>
            <Text style={styles.headerStyle}>AccountScreen</Text>
            <Button title="Log out" onPress={signout}/>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {fontSize:30,textAlign:"center"},
    subHeaderStyle: {},
});

export default AccountScreen;