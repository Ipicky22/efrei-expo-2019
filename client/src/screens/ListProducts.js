import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import { useQuery } from '@apollo/react-hooks';
import * as queries from '../apollo/query'
import Separator from '../components/Separator'
import { Container, Header, Item, Input, Icon, Button } from 'native-base';

export default ListProducts = ({ navigation }) => {

    const [q, setQ] = useState('')
    const { loading, error, data } = useQuery(queries.SEARCH_PRODUCT, {
        variables: {
            q: q
        }
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <Header searchBar rounded >
                <Item>
                    <Icon name="ios-search" />
                    <Input value={q} onChangeText={v => setQ(v)} placeholder="Search a card..." />
                </Item>
            </Header>

            {!loading && !error && (
                <FlatList
                    data={data.search}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item: { name, description, price, picture, category, id, idUser } }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('DetailProduct', { name, description, price, picture, category, id, idUser })} >
                            <>
                                <View style={{ display: "flex", flex: 1, flexDirection: "row", alignItems: "center" }}>
                                    <Image source={{ uri : `${picture}` }} style={{height: 100, width: 75, margin: 8}} />
                                    <View style={{ marginLeft: 8 }}>
                                        <Text style={{ fontWeight: "800", marginVertical: 2 }}>{name}</Text>
                                        <Text style={{ fontWeight: "600", marginVertical: 2 }}>{description}</Text>
                                        <Text style={{ fontWeight: "400", marginVertical: 2 }}>Price : {price} Euros</Text>
                                        <Text style={{ fontWeight: "200", marginVertical: 2 }}>{category}</Text>
                                    </View>
                                </View>
                                <View style={{ marginHorizontal: 8, marginVertical: 4 }}>
                                    <Separator />
                                </View>
                            </>
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

