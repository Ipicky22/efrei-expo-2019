import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import { useQuery } from '@apollo/react-hooks';
import * as queries from '../apollo/query'

export default DetailProduct = ({ navigation }) => {

    console.log("props", navigation)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Name : {navigation.getParam('name')}</Text>
            <Text>Description : {navigation.getParam('description')}</Text>
            <Text>Price : {navigation.getParam('price')}</Text>
            <Text>Category : {navigation.getParam('category')}</Text>
        </SafeAreaView>
    );
}
DetailProduct.navigationOptions = {
    title: 'Detail Product'
}

