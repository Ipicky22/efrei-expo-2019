import React from 'react';

import ProfilScreen from './screens/Profil'
import ListProductsScreen from './screens/ListProducts'
import FavoritesScreen from './screens/Favorites'
import CreateProductScreen from './screens/CreateProduct'

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// const HomeStack = createStackNavigator({
//     Profil: {
//         screen: ProfilScreen,
//     },
//     ListProducts: {
//         screen: ListProductsScreen,
//     },
//     Favorites: {
//         screen: FavoritesScreen,
//     },
//     CreateProduct: {
//         screen: CreateProductScreen,
//     }
// }, {
//     initialRouteName: 'ListProducts',
// });

const TabNavigator = createBottomTabNavigator({
    Profil: {
        screen: ProfilScreen,
    },
    ListProducts: {
        screen: ListProductsScreen,
    },
    Favorites: {
        screen: FavoritesScreen,
    }
}, {
    initialRouteName: 'ListProducts',
});

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
