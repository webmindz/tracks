import {useState, useEffect} from 'react';
import {Accuracy, requestPermissionsAsync, watchPositionAsync} from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);
     

    //run 1 time to check the permissions
    useEffect(() =>{
        let subscriber;
        const startWatching = async () => {
            try {
                await requestPermissionsAsync();
                subscriber = await watchPositionAsync(
                    {
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000,
                        distanceInterval: 10,
                    }, 
                    callback
                );
                setErr(null);
            } catch (e) {
                console.log('fout tijdens positionering:', e);
                setErr(e);
            };
        };

        //then start listening
        if (shouldTrack){
            startWatching();
        } else {
            if (subscriber){
                subscriber.remove();
            }
            subscriber = null;
        };


        //cleanup function
        return () => {
            if(subscriber){
                subscriber.remove();
            };
        };
    }, [shouldTrack, callback]);  //check if the value has been changed, if so, then run function. (movie 235)

//movie 240: useeffect bug to solve!!

    return [err];

};

