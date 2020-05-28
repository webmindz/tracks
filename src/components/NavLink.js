import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Spacer from './Spacer';
import { useNavigation } from '@react-navigation/native';

const NavLink = ({routeName, linkText}) => {
    const nav = useNavigation();

    return (
        <>
            <TouchableOpacity onPress={() => nav.navigate(routeName)}>
            <Spacer><Text style={styles.link}>{linkText}</Text></Spacer>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    link:{
        color: 'blue',
    },
});

export default NavLink;