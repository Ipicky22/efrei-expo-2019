import React from 'react';
import { View, Text } from 'react-native';
import { Tab, Tabs, TabHeading } from 'native-base';
import SafeAreaView from 'react-native-safe-area-view'
import MyCards from './MyCards'

export default Favorites = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tabs tabBarUnderlineStyle={{ backgroundColor: "black" }}>
                <Tab heading={<TabHeading><Text>My Cards</Text></TabHeading>}>
                    <MyCards navigation={navigation} />
                </Tab>
                <Tab heading={<TabHeading ><Text>My Favorites</Text></TabHeading>}>
                <Text>Tab 2</Text>
                </Tab>
            </Tabs>
        </SafeAreaView>
    );
}
Favorites.navigationOptions = {
    title: 'Favorites'
}

