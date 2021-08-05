import * as React from 'react';
import { Searchbar } from 'react-native-paper';


const TabThreeScreen = () => {


  return (
    <Searchbar
      style={{ padding:0, margin:5, }}
      placeholder="Search"
      value={''}
      icon="magnify"
    />
  );
};

export default TabThreeScreen;