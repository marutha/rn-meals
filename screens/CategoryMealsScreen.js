import React from 'react'

import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'

const CatergoryMealScreen = (props) => {
  const catId = props.navigation.getParam('categoryId')
  const selectedCat = CATEGORIES.find((cat) => cat.id === catId)
  const displayedMeals = MEALS.filter(
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
