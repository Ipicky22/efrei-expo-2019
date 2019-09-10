import React from 'react';
import SafeAreaView from 'react-native-safe-area-view'  
import { View, Text } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import * as queries from '../apollo/query'

export default Profil = ({ navigation }) => {

    //const userId = navigation.getParam('idUser')
    const userId = 1;
    const { loading, error, data } = useQuery(queries.GET_USER, {
        variables: {
            id:userId                 
        }
    });

    return ( 
        <SafeAreaView style={{ flex: 1 }}>
            {!loading && !error && (
                <>
                    <Text> Firstname : {data.user.firstname} </Text>
                    <Text> Lastname : {data.user.lastname} </Text>
                    <Text> Email : {data.user.email} </Text>
                    <Text> Address : {data.user.address} </Text>
                    <Text> State : {data.user.state} </Text>
                    <Text> City : {data.user.city} </Text>
                </>
            )}
        </SafeAreaView>
    );
}
Profil.navigationOptions = {
    title: 'Profil'
}


