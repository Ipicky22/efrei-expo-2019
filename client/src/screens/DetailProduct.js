import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import { useQuery } from '@apollo/react-hooks';
import * as queries from '../apollo/query'

export default DetailProduct = ({ navigation }) => {

    const userId = navigation.getParam('idUser')
    const { loading, error, data } = useQuery(queries.GET_USER, {
        variables: {
            id: userId
        }
    });

    console.log("data", data)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Name : {navigation.getParam('name')}</Text>
            <Text>Description : {navigation.getParam('description')}</Text>
            <Text>Price : {navigation.getParam('price')}</Text>
            <Text>Category : {navigation.getParam('category')}</Text>
            {!loading && !error && (
                <>
                    <Text>firstname : {data.user.firstname}</Text>
                    <Text>lastname : {data.user.lastname}</Text>
                    <Text>email : {data.user.email}</Text>
                    <Text>state : {data.user.state}</Text>
                    <Text>city : {data.user.city}</Text>
                    <Text>address : {data.user.address}</Text>
                </>
            )}
            <TouchableOpacity onPress={} >
                <Text>ADD FAVORITE</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
DetailProduct.navigationOptions = {
    title: 'Detail Product'
}

