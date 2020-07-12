import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import CategoriesScreen from './CategoriesScreen';
import MealItem from '../components/MealItem';

const CatergoryMealScreen = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem 
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability} 
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail', 
            params: {
              mealId: itemData.item.id
            }
          })
        }}
      />
    );
  }
  const catId = props.navigation.getParam('categoryId');
  const selectedCat = CATEGORIES.find(cat => cat.id === catId);
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
  return (
    <FlatList
      data={displayedMeals}
      renderItem={renderMealItem}
      style={{width: '100%'}}
    />
    )
};

CatergoryMealScreen.navigationOptions = (navData) => {
  const catId = navData.navigation.getParam('categoryId');
  const selectedCat = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCat.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CatergoryMealScreen;