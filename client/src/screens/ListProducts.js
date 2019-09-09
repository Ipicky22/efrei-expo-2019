import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import { useQuery } from '@apollo/react-hooks';
import * as queries from '../apollo/query'

export default ListProducts = ({ navigation }) => {

    const [q, setQ] = useState('')
    const { loading, error, data } = useQuery(queries.GET_PRODUCTS, {
        variables: {
            q: q
        }
    });

    console.log("data", data)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <FlatList
                data={products}
                renderItem={({ item: { name } }) => (
                    <View>
                        <Text>{name}</Text>
                    </View>
                )}
                keyExtractor={({ id }) => id}
            /> */}
        </SafeAreaView>
    );
}
ListProducts.navigationOptions = {
    title: 'Products'
}

