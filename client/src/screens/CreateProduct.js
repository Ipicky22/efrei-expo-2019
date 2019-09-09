import React from 'react';
import { View, Text } from 'react-native';

const Screen = ({ navigation }) => {

    return (
        <View>
            <Text>Hello World !</Text>
        </View>
    );
}
Screen.navigationOptions = {
    title: 'Accueil'
}
export default Screen;

