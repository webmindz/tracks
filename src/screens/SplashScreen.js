import React, {useContext, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const SplashScreen = () => {
    const {loading} = useContext(AuthContext);

    useEffect(() => {
        setTimeout(async() => {
            loading();
        }, 5000);
      }, []);



    return (
        <View>
            <Text style={styles.headerStyle}>SplashScreen gedurende 5 seconden.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {fontSize:30,textAlign:"center"},
    subHeaderStyle: {},
});

export default SplashScreen;
