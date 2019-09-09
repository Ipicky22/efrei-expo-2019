import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import { useQuery } from '@apollo/react-hooks';
import * as queries from '../apollo/query'

export default ListProducts = ({ navigation }) => {

    const { loading, error, data } = useQuery(queries.GET_PRODUCTS);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {!loading && !error && (
                <FlatList
                    data={data.products}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item: { name, description, price, picture, category, id, idUser } }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('DetailProduct', { name, description, price, picture, category, id, idUser })} >
                            <View>
                                <Text>{name}</Text>
                                <Text>{description}</Text>
                                <Text>{price}</Text>
                                <Text>{category}</Text>
                                {/* <Image source={require("../../assets/" + picture )} style={{height: 50, width: 50}} /> */}
                            </View>
                        </TouchableOpacity>
                    )}
                />
            )}
        </SafeAreaView>
    );
}
ListProducts.navigationOptions = {
    title: 'Products'
}

