import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";
import { Icon } from "@shoutem/ui";

import DiscoverScreen from "../screens/DiscoverScreen";
import MapViewScreen from "../screens/MapViewScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TruckPage from "../screens/TruckPage";
import Favorites from "../screens/Favorites";
import TruckRegisterForm from "../screens/TruckRegisterForm";
import RegisterScreen from "../screens/RegisterScreen";

const DiscoverStack = createStackNavigator(
  {
    Discover: DiscoverScreen,
    Truck: TruckPage,
  },
  {
    initialRouteName: "Discover",
  }
);

DiscoverStack.navigationOptions = {
  tabBarLabel: "Discover",
  tabBarIcon: <Icon name="add-to-favorites-on" />,
};

const MapStack = createStackNavigator(
  {
    Map: MapViewScreen,
    Truck: TruckPage,
  },
  {
    initialRouteName: "Map",
  }
);

MapStack.navigationOptions = {
  tabBarLabel: "Map",
  tabBarIcon: <Icon name="maps" />,
};

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Favorites: Favorites,
    Truck: TruckPage,
    TruckRegisterForm: TruckRegisterForm,
    Register: RegisterScreen,
  },
  {
    initialRouteName: "Profile",
    navigationOptions: {
      title: "Profile",
    },
  }
);

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: <Icon name="user-profile" />,
};

export default createBottomTabNavigator({
  DiscoverStack,
  MapStack,
  ProfileStack,
});
