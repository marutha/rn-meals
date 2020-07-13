import React from 'react'
import { useSelector } from 'react-redux'

import { CATEGORIES } from '../data/dummy-data'
import MealList from '../components/MealList'

const CatergoryMealScreen = (props) => {
  const catId = props.navigation.getParam('categoryId')
  const availableMeals = useSelector((state) => state.meals.filteredMeals)
  const selectedCat = CATEGORIES.find((cat) => cat.id === catId)
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  )
  return <MealList listData={displayedMeals} navigation={props.navigation} />
}

CatergoryMealScreen.navigationOptions = (navData) => {
  const catId = navData.navigation.getParam('categoryId')
  const selectedCat = CATEGORIES.find((cat) => cat.id === catId)
  return {
    headerTitle: selectedCat.title,
  }
}

export default CatergoryMealScreen
