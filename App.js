import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { useFonts } from 'expo-font';
import { Text, View } from './components/Themed';

import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'AdorNoirrit',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'AdorNoirrit',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'AdorNoirrit',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'AdorNoirrit',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'AdorNoirrit',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'AdorNoirrit',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'AdorNoirrit',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'AdorNoirrit',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'AdorNoirrit',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'AdorNoirrit',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'AdorNoirrit',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'AdorNoirrit',
      fontWeight: 'normal',
    },
  }
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};

export default function App() {

  let [fontsLoaded] = useFonts({
    'AdorNoirrit': require('./assets/fonts/surjo.ttf'),
  });

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();


  if (!fontsLoaded && !isLoadingComplete) {
    return <Text> f </Text>;
  } else {
    return (
      <PaperProvider theme={theme}>
        <View style={{ fontFamily: 'AdorNoirrit', fontSize: 40 }}></View>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </PaperProvider>
    );
  }


}
