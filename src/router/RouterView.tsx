/* eslint-disable import/no-extraneous-dependencies */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { BottomTabParamList, StackParamList } from 'shared/interfaces/IStack';
import SettingsView from 'pages/Settings/SettingsView';
import ProfileView from 'pages/Profile/ProfileView';
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeLayout from 'pages/Home/HomeLayout';
import SingleCategoryLayout from 'pages/SingleCategory/SingleCategoryLayout';
import SearchQueryLayout from 'pages/SearchQuery/SearchQueryLayout';

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
        component={SettingsView}
        options={{
          tabBarIcon: () => <Feather name="settings" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileView}
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
        <Stack.Screen name="SearchProduct" component={SearchQueryLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterView;