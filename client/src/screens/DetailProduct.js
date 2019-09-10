import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import { useQuery } from '@apollo/react-hooks';
import * as queries from '../apollo/query'
import Separator from '../components/Separator'

export default DetailProduct = ({ navigation }) => {

    const userId = navigation.getParam('idUser')
    const { loading, error, data } = useQuery(queries.GET_USER, {
        variables: {
            id: userId
        }
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ display: "flex", flex: 1, marginTop: 8 }}>
                <View style={{ height: 350, width: 200, backgroundColor: "red", margin: 8, alignSelf: "center" }}></View>
                <View style={{ marginTop: 16, marginHorizontal: 8 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontWeight: "600", marginVertical: 2 }}>Name :</Text>
                        <Text style={{ fontWeight: "800", marginVertical: 2 }}>{navigation.getParam('name')}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontWeight: "600", marginVertical: 2 }}>Edition :</Text>
                        <Text style={{ fontWeight: "700", marginVertical: 2 }}>{navigation.getParam('description')}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontWeight: "600", marginVertical: 2 }}>Price :</Text>
                        <Text style={{ fontWeight: "600", marginVertical: 2 }}>{navigation.getParam('price')} Euros</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontWeight: "600", marginVertical: 2 }}>TCG :</Text>
                        <Text style={{ fontWeight: "400", marginVertical: 2 }}>{navigation.getParam('category')}</Text>
                    </View>
                </View>
                {!loading && !error && (
                    <>
                        <View style={{ marginHorizontal: 8, marginVertical: 8 }}>
                            <Separator />
                        </View>
                        <View style={{ marginHorizontal: 8 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ fontWeight: "600", marginVertical: 2 }}>Firstname :</Text>
                                <Text style={{ fontWeight: "800", marginVertical: 2 }}>{data.user.firstname}</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ fontWeight: "600", marginVertical: 2 }}>Lastname :</Text>
                                <Text style={{ fontWeight: "600", marginVertical: 2 }}>{data.user.lastname}</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ fontWeight: "600", marginVertical: 2 }}>Email :</Text>
                                <Text style={{ fontWeight: "400", marginVertical: 2 }}>{data.user.email}</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ fontWeight: "600", marginVertical: 2 }}>State :</Text>
                                <Text style={{ fontWeight: "200", marginVertical: 2 }}>{data.user.state}</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ fontWeight: "600", marginVertical: 2 }}>City :</Text>
                                <Text style={{ fontWeight: "200", marginVertical: 2 }}>{data.user.city}</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ fontWeight: "600", marginVertical: 2 }}>Address :</Text>
                                <Text style={{ fontWeight: "200", marginVertical: 2 }}>{data.user.address}</Text>
                            </View>
                        </View>
                    </>
                )}
                <View style={{ marginHorizontal: 8, marginVertical: 8 }}>
                    <Separator />
                </View>
                <View style={{ marginHorizontal: 8 }}>
                    <Text style={{ fontWeight: "600", marginVertical: 2 }}>Currently 10 people are interested in this card.</Text>
                </View>
                <View>
                    <Button title="Follow" />
                    <Button title="Share" />
                </View>
            </View>
        </SafeAreaView>
    )
}
DetailProduct.navigationOptions = {
    title: 'Detail Product'
}

