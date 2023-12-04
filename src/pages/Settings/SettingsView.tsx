import { Button, View } from 'react-native';
import React, { useState } from 'react';
import SettingsForm from './SettingsForm';

const SettingsView = () => {
  // ALL STATE
  const [displayForm, setDisplayForm] = useState(false);

  return (
    <View className="h-full">
      {displayForm ? (
        <SettingsForm setDisplayForm={setDisplayForm} />
      ) : (
        <View className="flex items-center justify-center h-full">
          <Button title="Add New Product" color="black" onPress={() => setDisplayForm(true)} />
        </View>
      )}
    </View>
  );
};

export default SettingsView;
