import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavouritesScreen from '../screens/FavouritesScreen'
import Colors from '../constants/Colors'

const MealsNavigator = createStackNavigator(
    {
        Catergories: {
            screen: CategoriesScreen,
        },
        CategoryMeals: {
            screen: CategoryMealScreen,
        },
        MealDetail: MealDetailScreen,
    },
    {
        // initialRouteName: 'MealDetail',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor:
                    Platform.OS === 'android' ? Colors.primaryColor : '',
            },
            headerTintColor:
                Platform.OS === 'android' ? 'white' : Colors.primaryColor,
            headerTitle: 'A Screen',
        },
    }
)

const MealsFavTabNavigator = createBottomTabNavigator(
    {
        Meals: {
            screen: MealsNavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="ios-restaurant"
                            size={20}
                            color={tabInfo.tintColor}
                        />
                    )
                },
            },
        },
        Favourites: {
            screen: FavouritesScreen,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="ios-heart"
                            size={20}
                            color={tabInfo.tintColor}
                        />
                    )
                },
            },
        },
    },
    {
        tabBarOptions: {
            activeTintColor: Colors.accentColor,
        },
    }
)

export default createAppContainer(MealsFavTabNavigator)
