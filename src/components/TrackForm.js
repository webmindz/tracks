import React, {useContext} from 'react';
import {Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';


const TrackForm = () => {
    const {
        state,
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);

    const [saveTrack]= useSaveTrack();


    return (
        <>
            <Spacer>
                <Input 
                    value={state.name}
                    onChangeText={changeName}
                    placeholder="Enter track name"
                />
            </Spacer>
            <Spacer>
            {state.recording
                ? <Button title="Stop" onPress={stopRecording} />
                : <Button title="Start Recording" onPress={startRecording} />
            }</Spacer>
<Spacer>
            {!state.recording && state.locations.length
                ? <Button title="Save track" onPress={saveTrack} />
                : null
            }</Spacer>
        </>
    );
};

export default TrackForm;