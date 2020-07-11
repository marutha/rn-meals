import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';


const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)} 
        onError={(err) => console.log(err)} />
    )
  }

  

  return (
    <View style={styles.screen}>
      <Text> Hello Maru!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
