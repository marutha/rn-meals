import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton'
import { MEALS } from '../data/dummy-data'

const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    )
}

MealDetailScreen.navigationOptions = (navData) => {
    const mealId = navData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favourite"
                    iconName="ios-star"
                    onPress={() => {}}
                />
            </HeaderButtons>
        ),
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default MealDetailScreen
