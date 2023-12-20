import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreem from './scream/HomeScreem';
import ProfileScreem from './scream/ProfileScreem';
import taf from './scream/taf';
import forms from './scream/forms';
import fenetre from './scream/fenetre';
import presente from './scream/presente';


const Tab = createBottomTabNavigator();

export default function App() { 
  return (
      <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name = "Home" component = {HomeScreem}/>
            <Tab.Screen name = "Profile" component = {ProfileScreem}/>
            <Tab.Screen name = "Interface" component = {taf}/>
            <Tab.Screen name = "formulaire" component = {forms} />
            <Tab.Screen name = "Fenetre" component = {fenetre} />
            <Tab.Screen name = "Presente" component = {presente} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}


