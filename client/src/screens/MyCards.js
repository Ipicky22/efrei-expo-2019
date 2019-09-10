import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Icon, Fab } from 'native-base';
import { useQuery } from '@apollo/react-hooks';
import * as queries from '../apollo/query'
import Separator from '../components/Separator'

export default MyCards = ({ navigation }) => {

    const userId = 1;

    const [q, setQ] = useState('')
    const { loading, error, data } = useQuery(queries.MINE_PRODUCT, {
        variables: {
            q: userId
        }
    });

    return (
        <View style={{ flex: 1 }}>
            {!loading && !error && (
                <FlatList
                    data={data.mine}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item: { name, description, price, picture, category, id, idUser } }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('DetailProduct', { name, description, price, picture, category, id, idUser })} >
                            <>
                                <View style={{ display: "flex", flex: 1, flexDirection: "row", alignItems: "center" }}>
                                    <Image source={{ uri: `${picture}` }} style={{ height: 100, width: 75, backgroundColor: "red", margin: 8 }} />
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

            <Fab
                active={false}
                direction="up"
                containerStyle={{}}
                style={{ backgroundColor: 'black' }}
                position="bottomRight"
                onPress={() => navigation.navigate('CreateProduct')}>
                <Icon name="add" />
            </Fab>
        </View>
    );
}


