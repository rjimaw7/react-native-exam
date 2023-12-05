import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingleCategoryLayout from 'pages/SingleCategory/SingleCategoryLayout';
import SearchQueryLayout from 'pages/SearchQuery/SearchQueryLayout';
import SingleProductLayout from 'pages/SingleProduct/SingleProductLayout';
import HomeTabs from './components/HomeTabs';
import { StackParamList } from 'shared/interfaces/IStack';

const Stack = createNativeStackNavigator<StackParamList>();

const RouterView = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={HomeTabs} />
        <Stack.Screen name="SingleCategory" component={SingleCategoryLayout} />
        <Stack.Screen name="SingleProduct" component={SingleProductLayout} />
        <Stack.Screen name="SearchProduct" component={SearchQueryLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterView;
