/* eslint-disable import/no-extraneous-dependencies */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { BottomTabParamList, StackParamList } from 'shared/interfaces/IStack';
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeLayout from 'pages/Home/HomeLayout';
import SingleCategoryLayout from 'pages/SingleCategory/SingleCategoryLayout';
import SearchQueryLayout from 'pages/SearchQuery/SearchQueryLayout';
import SingleProductLayout from 'pages/SingleProduct/SingleProductLayout';
import SettingsLayout from 'pages/Settings/SettingsLayout';
import ProfileLayout from 'pages/Profile/ProfileLayout';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createNativeStackNavigator<StackParamList>();

const HomeTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeLayout}
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsLayout}
        options={{
          tabBarIcon: () => <Feather name="settings" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileLayout}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="account" size={24} color="black" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

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
