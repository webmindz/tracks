import React, {useContext} from 'react';
import {Text, StyleSheet, SafeAreaView, View} from 'react-native';
import {Context as TrackContext} from '../context/TrackContext';
import MapView, {Polyline} from 'react-native-maps';


const TrackDetailScreen = ({navigation, route}) => {
    const {state} = useContext(TrackContext);
    const { _id } = route.params;

    const track = state.find( t => t._id === _id );
    const initialCoords = track.locations[0].coords;

    return <>
        <SafeAreaView style={styles.container}><View>
            <Text style={styles.headerStyle}>{track.name}</Text>
            <MapView
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
                style={styles.map}
            >
                <Polyline coordinates={track.locations.map(loc => loc.coords)} 
                />
            </MapView>
        </View></SafeAreaView>
    </>
};

const styles = StyleSheet.create({
    container:{flex: 1},
    headerStyle: {fontSize:30,textAlign:"center"},
    subHeaderStyle: {},
    map:{height:300},
});

export default TrackDetailScreen;