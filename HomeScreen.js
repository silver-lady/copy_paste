
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CopyComponent from './CopyComponent';
import PasteComponent from './PasteComponent';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Copy" component={CopyComponent} />
      <Tab.Screen name="Paste" component={PasteComponent} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
