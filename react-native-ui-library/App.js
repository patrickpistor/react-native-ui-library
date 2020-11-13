import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Modal } from 'react-native';
import HomeScreen from './screens/home';
import DesignSystemScreen from './screens/design-system';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from './constants';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'ios-home'
            } else if (route.name === 'Designs') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.defaults.blue,
          inactiveTintColor: colors.defaults.grey,
        }}
      >
        <Tab.Screen name="Home" component={ HomeScreen } />
        <Tab.Screen name="Designs" component={ DesignSystemScreen } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
