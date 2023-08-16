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
import Calendar from './screens/Calendar';
import { useFonts } from 'expo-font'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [fontsLoaded] = useFonts({
    'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
    'Montserrat-ThinItalic': require('./assets/fonts/Montserrat-ThinItalic.ttf'),
    'Montserrat-ExtraLight': require('./assets/fonts/Montserrat-ExtraLight.ttf'),
    'Montserrat-ExtraLightItalic': require('./assets/fonts/Montserrat-ExtraLightItalic.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-LightItalic': require('./assets/fonts/Montserrat-LightItalic.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-MediumItalic': require('./assets/fonts/Montserrat-MediumItalic.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-SemiBoldItalic': require('./assets/fonts/Montserrat-SemiBoldItalic.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-BoldItalic': require('./assets/fonts/Montserrat-BoldItalic.ttf'),
    'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-ExtraBoldItalic': require('./assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-BlackItalic': require('./assets/fonts/Montserrat-BlackItalic.ttf'),
  });

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
        name='Calendar'
        component={Calendar}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="calendar" size={32} color={color} />
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