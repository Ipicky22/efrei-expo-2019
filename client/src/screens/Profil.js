import React, { useState } from 'react';
import SafeAreaView from 'react-native-safe-area-view'
import { View, Text } from 'react-native';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Input from '../components/Input'
import Separator from '../components/Separator'
import * as queries from '../apollo/query'
import * as mutations from '~/apollo/mutations'
import { Button } from 'native-base';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default Profil = ({ navigation }) => {

    //const userId = navigation.getParam('idUser')
    const userId = 1;
    const { loading, error, data } = useQuery(queries.GET_USER, {
        variables: {
            id: userId
        }
    });

    const [editMode, setEditMode] = useState(false)

    changeEditMode = () => {
        setEditMode(!editMode)
    }

    const [editUser, {
        loading: mutationLoading,
        error: mutationError,
        data: mutationData
    }] = useMutation(mutations.EDIT_USER)

    const onSubmit = async ({ firstname, lastname, email, address, city, state }) => {
        console.log("ici")
        await editUser({
            variables: {
                id: userId,
                data: {
                    firstname,
                    lastname,
                    email,
                    address,
                    city,
                    state
                }
            },
        })
        .then(changeEditMode)
    }

    const validationSchema = Yup.object().shape({
		firstname: Yup.string().required('Le prénom est requis'),
		lastname: Yup.string().required('Le nom est requis'),
    })
    
    return (
        <SafeAreaView style={{ flex: 1 }}>

            {editMode ?
                (
                    !loading && !error && (
                        <Formik
                            validateOnChange={false}
                            validateOnBlur={false}
                            enableReinitialize={true}
                            initialValues={data.user}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                        >
                            {({ values, errors, handleChange, setFieldValue, handleSubmit }) => (
                                <>
                                    <Input
                                        placeholder="Firstname"
                                        value={values.firstname}
                                        error={errors.firstname}
                                        onChangeText={handleChange('firstname')}
                                    />
                                    <Separator />
                                    <Input
                                        placeholder="Lastname"
                                        value={values.lastname}
                                        error={errors.lastname}
                                        onChangeText={handleChange('lastname')}
                                    />
                                    <Separator />
                                    <Input
                                        placeholder="Email"
                                        value={values.email}
                                        error={errors.email}
                                        onChangeText={handleChange('email')}
                                    />
                                    <Separator />
                                    <Input
                                        placeholder="Address"
                                        value={values.address}
                                        error={errors.address}
                                        onChangeText={handleChange('address')}
                                    />
                                    <Separator />
                                    <Input
                                        placeholder="State"
                                        value={values.state}
                                        error={errors.state}
                                        onChangeText={handleChange('state')}
                                    />
                                    <Separator />
                                    <Input
                                        placeholder="City"
                                        value={values.city}
                                        error={errors.city}
                                        onChangeText={handleChange('city')}
                                    />
                                    <View style={{ height: 10 }} />
                                    <Button onPress={handleSubmit} disabled={mutationLoading}>
                                    <Text>{mutationLoading ? '...' : 'Save'}</Text>
                                    </Button>
                                </>
                            )}
                        </Formik>
                    )
                ) :
                (
                    !loading && !error && (
                        <>
                            <View>
                                <Text> Firstname : {data.user.firstname} </Text>
                                <Text> Lastname : {data.user.lastname} </Text>
                                <Text> Email : {data.user.email} </Text>
                                <Text> Address : {data.user.address} </Text>
                                <Text> State : {data.user.state} </Text>
                                <Text> City : {data.user.city} </Text>
                            </View>
                            <View style={{ width: "100%", height: 40 }}>
                                <Button style={{ flex: 1, justifyContent: "center", marginHorizontal: 16 }} onPress={changeEditMode}><Text>Edit</Text></Button>
                            </View>
                        </>
                    )
                )
            }
        </SafeAreaView>
    );
}
Profil.navigationOptions = {
    title: 'Profil'
}


