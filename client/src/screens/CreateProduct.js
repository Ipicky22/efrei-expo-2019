import React, {useState} from 'react';
import { View, Image, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import Separator from '../components/Separator'
import Input from '../components/Input'
import { Button } from 'native-base';
import { useMutation } from '@apollo/react-hooks';
import * as mutations from '~/apollo/mutations'
import gql from 'graphql-tag';
const uuidv4 = require('uuid/v4');

const GET_PRODUCTS = gql`
{
    products {
        id
        name
        description
        price
        idUser
        picture
        category
    },
}`

const generateID = uuidv4()

export default CreateProduct = ({ navigation }) => {

    const userId = 1;

    const link = "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macos/photo-3nav-button-icon.png"

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [category, setCategory] = useState()

    const [addCard, {
		loading: mutationLoading,
		error: mutationError,
		data: mutationData
    }] = useMutation(mutations.CREATE_CARD);
    
    cardCreator = async () => {
        await addCard({
			variables: {
                id: generateID,
				idUser: userId,
				data: {
					name,
                    description,
                    price: parseInt(price),
                    category
				}
            },
            refetchQueries: [`products`]
        })
		.then(navigation.goBack())
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <Image source={{ uri: `${link}` }} style={{ height: 350, width: 200, backgroundColor: "red", margin: 8, alignSelf: "center" }} />
            <View style={{ marginTop: 16, marginHorizontal: 8 }}>
                <Input
                    placeholder="Name"
                    onChangeText={setName}
                />
                <Separator />
                <Input
                    placeholder="Edition"
                    onChangeText={setDescription}
                />
                <Separator />
                <Input
                    placeholder="Price"
                    onChangeText={setPrice}
                />
                <Separator />
                <Input
                    placeholder="TCG"
                    onChangeText={setCategory}
                />
            </View>
            <Button onPress={cardCreator} style={{ height: 40, width:"80%", justifyContent: "center", marginHorizontal: 16}}><Text>Create this Card</Text></Button>
        </SafeAreaView>
    );
}