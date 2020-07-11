import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const FavouritesScreen = props => {
  return (<View>
    <Text>
      The Favourites screen!
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

export default FavouritesScreen;