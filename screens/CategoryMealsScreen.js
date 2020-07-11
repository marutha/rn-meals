import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const CatergoryMealScreen = props => {
  return (<View>
    <Text>
      The Category  Meals screen!
    </Text>
  </View>)
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CatergoryMealScreen;