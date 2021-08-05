import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {List } from 'react-native-paper';



const TabTwoScreen = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.container} >



      <List.Section >
        <List.Accordion
          theme={{ colors: { primary: '#888' } }}
          title="রাজনীতি"
          left={props => <List.Icon {...props} icon="folder" />}
          expanded={expanded}
          onPress={handlePress}>
          <List.Item

            title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>


      <List.Section >
        <List.Accordion
          theme={{ colors: { primary: '#888' } }}
          title="রাজনীতি"
          left={props => <List.Icon {...props} icon="folder" />}
          expanded={expanded}
          onPress={handlePress}>
          <List.Item

            title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>



      



      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default TabTwoScreen;