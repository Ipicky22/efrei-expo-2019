import React from 'react';

import ProfilScreen from './screens/Profil'
import ListProductsScreen from './screens/ListProducts'
import FavoritesScreen from './screens/Favorites'
import CreateProductScreen from './screens/CreateProduct'
import DetailProductScreen from './screens/DetailProduct'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const ProductsStack = createStackNavigator({
    ListProducts: {
        screen: ListProductsScreen,
    },
    DetailProduct: {
        screen: DetailProductScreen,
    }
}, {
    initialRouteName: 'ListProducts',
});

const CreateStack = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen,
    },
    CreateProduct: {
        screen: CreateProductScreen,
    }
}, {
    initialRouteName: 'Favorites',
});

const TabNavigator = createBottomTabNavigator({
    Profil: {
        screen: ProfilScreen,
    },
    Products: {
        screen: ProductsStack,
    },
    Create: {
        screen: CreateStack,
    }
}, {
    initialRouteName: 'Products',
});

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
