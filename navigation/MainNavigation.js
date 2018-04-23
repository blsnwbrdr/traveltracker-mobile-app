import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, StatusBar, ScrollView, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

// SCREENS
import CountryListScreen from './../screens/CountryListScreen';
import MyListScreen from './../screens/MyListScreen';

// STYLE CONSTANTS
import { colorAqua, colorBlue, colorLightGrey, colorDarkGrey } from './../styles/Constants';

export default TabNavigator(
  {
    'Countries': {
      screen: CountryListScreen,
    },
    'My List': {
      screen: MyListScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Countries':
            iconName = 'ios-list';
            break;
          case 'My List':
            iconName = 'ios-search';
        }
        return (
          <Ionicons
            name={iconName}
            size={25}
            color={tintColor}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: colorLightGrey,
      },
      activeTintColor: colorAqua,
      inactiveTintColor: colorDarkGrey,
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);
