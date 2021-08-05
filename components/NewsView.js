import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NewsView = (props) => {

  console.log(props.articles);
  
    return (
      <View>
        {

          props.articles.map((article, index)=>{
            return <Text key = {index}>
            { article.title }
            </Text>
          })
          
        }
      </View>
    );
  }

  export default NewsView;