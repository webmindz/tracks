import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Spacer from './Spacer';
import { Input, Text, Button, } from 'react-native-elements';


const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Spacer>
                <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
                <Input label="Password" secureTextEntry={true} value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} />
            </Spacer>
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer><Button title={submitButtonText} onPress={() => onSubmit({email,password})}/></Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage:{
        color: 'red',
        textAlign: 'center',
        margin: 15,
    },
});

export default AuthForm;