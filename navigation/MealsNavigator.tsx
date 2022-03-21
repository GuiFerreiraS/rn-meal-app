import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import FiltersScreen from "../screens/FiltersScreen";
import { Text } from "react-native";

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.primaryColor,
    },
    headerTitleStyle: {
      fontFamily: "open-sans-bold",
    },
    headerTintColor: "white",
  },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  defaultStackNavOptions
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  defaultStackNavOptions
);

const FiltersNavigator = createStackNavigator(
  { Filters: FiltersScreen },
  defaultStackNavOptions
);

const MealsFavTabNavigator = createMaterialBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-restaurant" size={24} color={tabInfo.tintColor} />
        ),
        tabBarColor: colors.primaryColor,
        tabBarLabel: (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        ),
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />
        ),
        tabBarColor: colors.accentColor,
        tabBarLabel: (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
        ),
      },
    },
  },
  {
    activeColor: "white",
    shifting: true,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
