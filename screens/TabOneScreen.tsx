import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width / 541; //541 is actual image width

const TabOneScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <View style={styles.newsbox}>

          <Image source={{uri: 'https://images.prothomalo.com/prothomalo-bangla%2F2021-08%2Fdc0eee7b-49db-4971-9fca-94148a9b0ab8%2FUntitled_11.png?rect=0%2C11%2C640%2C427&auto=format%2Ccompress&fmt=webp&format=webp&w=320&dpr=1.0'}} style={styles.image}>

          </Image>
          <Text style={styles.text}>
            দেশে ৯৮ শতাংশ রোগী ডেলটায় সংক্রমিত: গবেষণা
          </Text>
        </View>


        <View style={styles.newsbox}>
          <Text style={styles.text}>
            Lorem ipsdsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
        </View>



        <View style={styles.newsbox}>

          <Image source={require('../assets/images/icon.png')} style={styles.image}>

          </Image>
          <Text style={styles.text}>
            Lorem ipsdsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>



        <View style={styles.newsbox}>

          <Image source={require('../assets/images/icon.png')} style={styles.image}>

          </Image>
          <Text style={styles.text}>
            Lorem ipsdsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>





        <View style={styles.newsbox}>

          <Image source={require('../assets/images/icon.png')} style={styles.image}>

          </Image>
          <Text style={styles.text}>
            Lorem ipsdsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 0,
    padding: 0
  },

  image: {
    width: '100%',
    height: 362 * ratio, //362 is actual height of image
    padding: 10,
  },

  text: {
    fontSize: 20,
    marginTop:10,
    marginBottom:10,
  },

  newsbox: {
    padding: 10,
    flex: 1,

    backgroundColor: '#fff',
    minWidth: '95%',
    // borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

});

export default TabOneScreen;