//import '../_mockLocation';
import React, {useContext, useCallback} from 'react';
import { useIsFocused } from '@react-navigation/native';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Text} from 'react-native-elements';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = () => {
    const isFocused = useIsFocused();
    const {state, addLocation} = useContext(LocationContext);   
   
    const callback = useCallback(location =>{
        addLocation(location, state.recording);
    },[state.recording]);
    
    const [err] = useLocation(isFocused || state.recording, callback);

    return (
        <SafeAreaView style={styles.container}>
                <Text h2>Create a Track</Text>
                <Map />
    { err ? <Text>Please enable Location Services.</Text>: null}
                <TrackForm />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{flex: 1},
    headerStyle: {},
    subHeaderStyle: {},
});

export default TrackCreateScreen; 