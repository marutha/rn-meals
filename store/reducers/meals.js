import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVOURITE, SET_FILTERS } from '../actions/meals'

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
}

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favouriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      )
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favouriteMeals]
        updatedFavMeals.splice(existingIndex, 1)
        return {
          ...state,
          favouriteMeals: updatedFavMeals,
        }
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId)
        return {
          ...state,
          favouriteMeals: state.favouriteMeals.concat(meal),
        }
      }
      break
    case SET_FILTERS:
      const applied = action.filters
      const filteredMeals = state.meals.filter((meal) => {
        if (applied.glutenFree && !meal.isGlutenFree) {
          return false
        }
        if (applied.lactoseFree && !meal.isLactoseFree) {
          return false
        }
        if (applied.vegan && !meal.isVegan) {
          return false
        }
        if (applied.vegetarian && !meal.isVegetarian) {
          return false
        }
        return true
      })
      return {
        ...state,
        filteredMeals: filteredMeals,
      }
    default:
      break
  }
  return state
}

export default mealsReducer
