import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import Saved from './screens/Saved';
import Profile from './screens/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
      
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name='home' size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Liked'
        component={Saved}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name='heart' size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='account' size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="TabNavigator" 
          component={TabNavigator} 
          options={{headerShown: false}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;

const styles = StyleSheet.create({});