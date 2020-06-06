import React,{ useEffect, useContext } from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext} from '../context/TrackContext';

const TrackListScreen = ({navigation}) => {
    const {state, fetchTracks} = useContext(TrackContext);

    useEffect(() => {
        (async function anyNameFunction() {
          await fetchTracks();
        })();
      }, [navigation]);

    return (
        <>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', bottom:'always' }}>
            <Text style={styles.headerStyle}>TrackListScreen</Text>
            <FlatList
                data={state ? state : []}
                keyExtractor={item => item._id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => 
                            navigation.navigate('TrackDetailScreen', {_id: item._id})
                        }>
                        <ListItem chevron title={item.name}/>
                    </TouchableOpacity>
                    )
                }}
            />
        </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container:{flex: 1, backgroundColor:'red'},
    headerStyle: {fontSize:30,textAlign:"center"},
    subHeaderStyle: {},
});

export default TrackListScreen;