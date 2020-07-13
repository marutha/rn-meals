import React, { useEffect, useCallback } from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'

import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import { toggleFav } from '../store/actions/meals'

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  )
}
const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId')
  const dispatch = useDispatch()
  const selectedMeal = useSelector((state) =>
    state.meals.meals.find((meal) => meal.id === mealId)
  )

  const isFavourite = useSelector((state) =>
    state.meals.favouriteMeals.some((meal) => meal.id === mealId)
  )
  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFav(mealId))
  }, [dispatch, mealId])

  useEffect(() => {
    props.navigation.setParams({ favHandler: toggleFavouriteHandler })
  }, [toggleFavouriteHandler])

  useEffect(() => {
    props.navigation.setParams({ fav: isFavourite })
  }, [isFavourite])
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((i) => (
        <ListItem key={i}>{i}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((i) => (
        <ListItem key={i}>{i}</ListItem>
      ))}
    </ScrollView>
  )
}

MealDetailScreen.navigationOptions = (navData) => {
  // const mealId = navData.navigation.getParam('mealId')
  const mealTitle = navData.navigation.getParam('mealTitle')
  const favHandler = navData.navigation.getParam('favHandler')
  const isFav = navData.navigation.getParam('fav')
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName={isFav ? 'ios-star' : 'ios-star-outline'}
          onPress={favHandler}
        />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
})

export default MealDetailScreen
