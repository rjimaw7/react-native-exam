import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { ScreenProp } from 'shared/interfaces/IStack';

const Settings = ({ navigation }: ScreenProp) => {
  return (
    <View style={styles.container}>
      <Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
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

export default Settings;
