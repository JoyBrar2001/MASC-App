import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React, { useEffect, useState } from 'react';
import Saved from './screens/Saved';
import Profile from './screens/Profile';
import Calendar from './screens/Calendar';
import * as Font from 'expo-font';
import colors from './assets/colors/colors';
import { BlurView } from 'expo-blur';
import HomeStack from './screens/HomeScreen';
import FoodDelivery from './screens/FoodDelivery';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

Entypo.loadFont();
Ionicons.loadFont();
MaterialCommunityIcons.loadFont();

const TabNavigator = () => {
  const [fontsLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
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
    })
    .then(() => {
      setFontLoaded(true)
    });
  }, []);

  if(!fontsLoaded){
    return null;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          borderRadius: 20,
          height: Platform.OS == "ios" ? 70 : 50,
          backgroundColor: "#00000099",
          bottom: 0,
          paddingTop: Platform.OS == "ios" ? 10 : 0,
        },
        tabBarBackground: () => (
          <BlurView tint='dark' intensity={20} style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: Platform.OS == "ios" ? 70 : 50,
          }} />
        ),
        tabBarInactiveTintColor: colors.white,
        tabBarActiveTintColor: colors.activeIconColor,
      }}
    >
      <Tab.Screen
        name='HomeStack'
        component={HomeStack}
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
        name='FoodDelivery'
        component={FoodDelivery}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="fast-food" size={32} color={color} />
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
          component={ TabNavigator }
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen 
          name="EventDetails" 
          component={ EventDetails } 
          options={{headerShown: false}} 
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;