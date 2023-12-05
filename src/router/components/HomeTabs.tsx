/* eslint-disable import/no-extraneous-dependencies */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { BottomTabParamList } from 'shared/interfaces/IStack';
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeLayout from 'pages/Home/HomeLayout';
import SettingsLayout from 'pages/Settings/SettingsLayout';
import ProfileLayout from 'pages/Profile/ProfileLayout';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

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

export default HomeTabs;
