import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const win = Dimensions.get('window');
const ratio = win.width / 541; //541 is actual image width

const TabOneScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <View style={styles.newsbox}>
          <Image source={{ uri: 'https://images.prothomalo.com/prothomalo-bangla%2F2021-08%2Fdc0eee7b-49db-4971-9fca-94148a9b0ab8%2FUntitled_11.png?rect=0%2C11%2C640%2C427&auto=format%2Ccompress&fmt=webp&format=webp&w=320&dpr=1.0' }} style={styles.image}>
          </Image>
          <Text style={styles.text}>
            দেশে ৯৮ শতাংশ রোগী ডেলটায় সংক্রমিত: গবেষণা
          </Text>
          <Text style={styles.date}>০৫ আগস্ট ২০২১, ১৪: ১৫</Text>
        </View>


        <View style={styles.newsbox}>
          <Text style={styles.text}>
            শিল্প–কলকারখানা খোলা থাকবে, অভ্যন্তরীণ রুটে বিমান চলবে
          </Text>
          <Text style={styles.date}>০৫ আগস্ট ২০২১, ১৪: ১৫</Text>
        </View>



        <View style={styles.newsbox}>
          <Text style={styles.text}>
            শিল্প–কলকারখানা খোলা থাকবে, অভ্যন্তরীণ রুটে বিমান চলবে
          </Text>
          <Text style={styles.date}>০৫ আগস্ট ২০২১, ১৪: ১৫</Text>
        </View>


        <View style={styles.newsbox}>
          <Text style={styles.text}>
            শিল্প–কলকারখানা খোলা থাকবে, অভ্যন্তরীণ রুটে বিমান চলবে
          </Text>
          <Text style={styles.date}>০৫ আগস্ট ২০২১, ১৪: ১৫</Text>
        </View>



        <View style={styles.newsbar}>
          <View style={styles.left}>
            <Image source={{ uri: 'https://images.prothomalo.com/prothomalo-bangla%2F2021-08%2Fdc0eee7b-49db-4971-9fca-94148a9b0ab8%2FUntitled_11.png?rect=0%2C11%2C640%2C427&auto=format%2Ccompress&fmt=webp&format=webp&w=320&dpr=1.0' }} style={styles.barImage}>
            </Image>
          </View>
          <View style={styles.right}>
            <Text style={styles.text}>
              দেশে ৯৮ শতাংশ রোগী ডেলটায় সংক্রমিত: গবেষণা
            </Text>
            <Text style={styles.date}>০৫ আগস্ট ২০২১, ১৪: ১৫</Text>
          </View>


        </View>




        <View style={styles.newsbar}>
          <View style={styles.left}>
            <Image source={{ uri: 'https://images.prothomalo.com/prothomalo-bangla%2F2021-08%2Fdc0eee7b-49db-4971-9fca-94148a9b0ab8%2FUntitled_11.png?rect=0%2C11%2C640%2C427&auto=format%2Ccompress&fmt=webp&format=webp&w=320&dpr=1.0' }} style={styles.barImage}>
            </Image>
          </View>
          <View style={styles.right}>
            <Text style={styles.text}>
              দেশে ৯৮ শতাংশ রোগী ডেলটায় সংক্রমিত: গবেষণা
            </Text>
            <Text style={styles.date}>০৫ আগস্ট ২০২১, ১৪: ১৫</Text>
          </View>


        </View>



        <View style={styles.newsbar}>
          <View style={styles.left}>
            <Image source={{ uri: 'https://images.prothomalo.com/prothomalo-bangla%2F2021-08%2Fdc0eee7b-49db-4971-9fca-94148a9b0ab8%2FUntitled_11.png?rect=0%2C11%2C640%2C427&auto=format%2Ccompress&fmt=webp&format=webp&w=320&dpr=1.0' }} style={styles.barImage}>
            </Image>
          </View>
          <View style={styles.right}>
            <Text style={styles.text}>
              দেশে ৯৮ শতাংশ রোগী ডেলটায় সংক্রমিত: গবেষণা
            </Text>
            <Text style={styles.date}>০৫ আগস্ট ২০২১, ১৪: ১৫</Text>
          </View>
        </View>

        <Button 

    
        style={{
          width: 120,
          marginTop: 10,
          marginBottom: 15,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
          
          
        }}

          icon="arrow-right-circle" mode="text" onPress={() => console.log('Pressed')}>
          সিলেট        
        </Button>



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
    </SafeAreaView >
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
   
  },

  barImage: {
    width: '100%',
    height: 150 * ratio, //362 is actual height of image
  
  },

  text: {
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'AdorNoirrit',
    fontSize: 22,
    marginTop: 10,
    marginBottom: 5,
  },

  date: {
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'AdorNoirrit',
    fontSize: 17,
    marginBottom: 10,
    color: '#777',
  },

  left: {

    width: '40%',
    height: 150,
  },

  right: {
    paddingLeft: 10,
    height: 150,
    width: '60%',
  },

  newsbox: {

    flex: 1,
    padding:10,
    backgroundColor: '#fff',
    minWidth: '95%',
    // borderRadius: 5,
    marginBottom: 5,
    shadowColor: "#999",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.27,
    elevation: 2,
  },

  newsbar: {

    padding: 5,
    maxHeight: 120,

    flexDirection: 'row',

    flex: 1,

    backgroundColor: '#fff',

    // borderRadius: 5,
    marginBottom: 5,

    shadowColor: "#999",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.27,
    elevation: 2,



  },

});

export default TabOneScreen;