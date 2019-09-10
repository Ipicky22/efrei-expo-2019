import React from 'react';
import { View, Text } from 'react-native';
import { Tab, Tabs, TabHeading } from 'native-base';
import SafeAreaView from 'react-native-safe-area-view'
import MyCards from './MyCards'

export default Favorites = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tabs tabBarUnderlineStyle={{ backgroundColor: "white" }}>
                <Tab style={{ backgroundColor: "white" }} heading={<TabHeading style={{ backgroundColor: "black" }}><Text style={{ color: "white" }}>My Cards</Text></TabHeading>}>
                    <MyCards />
                </Tab>
                <Tab heading={<TabHeading style={{ backgroundColor: "black" }}><Text style={{ color: "white" }}>My Favorites</Text></TabHeading>}>
                <Text>Tab 2</Text>
                </Tab>
            </Tabs>
        </SafeAreaView>
    );
}
Favorites.navigationOptions = {
    title: 'Favorites'
}

