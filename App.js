import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
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
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();




  if (!isLoadingComplete) {
    return null;
  } else {
    return (

      <PaperProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </PaperProvider>

    );
  }
}
