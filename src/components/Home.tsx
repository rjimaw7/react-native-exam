import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { ScreenProp } from 'shared/interfaces/IStack';

const Home = ({ navigation }: ScreenProp) => {
  return (
    <View style={styles.container}>
      <Text>
        <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
