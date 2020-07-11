import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoriesScreen from './CategoriesScreen';

const CatergoryMealScreen = props => {
  // props.navigation.setParams({ headerTitle: 'hello' });
  const catId = props.navigation.getParam('categoryId');
  const selectedCat = CATEGORIES.find(cat => cat.id === catId);
  return (<View style={styles.screen}>
    <Text>
      The Category  Meals screen! {selectedCat.title}
    </Text>
    <Button title="Go to Meal details!" onPress={() => {
      props.navigation.navigate({routeName: 'MealDetail'})
    }}/>
    <Button title="Save and go back" onPress={() => {
      props.navigation.goBack();
    }} />
  </View>)
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