import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import FavoritesContextProvider from "../store/context/favorites-context";

const MealStack = createStackNavigator();
const FavStack = createStackNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const defaultStackNavOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.primaryColor,
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerTintColor: "white",
  cardStyle: {
    backgroundColor: "#999",
  },
  cardStyleInterpolator: ({ current, closing }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  }),
};

const MealsNavigator = () => (
  <MealStack.Navigator
    screenOptions={{
      ...defaultStackNavOptions,
    }}
  >
    <MealStack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={(navigationData) => ({
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="Menu"
              iconName="ios-menu"
              onPress={() => {
                navigationData.navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        ),
      })}
    />
    <MealStack.Screen
      name="CategoryMeals"
      component={CategoryMealsScreen}
      options={(navigationData) => {
        const catId = (navigationData?.route?.params as { categoryId: string })
          ?.categoryId;

        const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

        return {
          headerTitle: selectedCategory?.title,
        };
      }}
    />
    <MealStack.Screen
      name="MealDetail"
      component={MealDetailScreen}
      options={(navigationData) => {
        const catId = (navigationData?.route?.params as { mealId: string })
          ?.mealId;

        const selectedMeal = MEALS.find((cat) => cat.id === catId);

        return {
          headerTitle: selectedMeal?.title,
        };
      }}
    />
  </MealStack.Navigator>
);

const FavNavigator = () => (
  <FavStack.Navigator screenOptions={defaultStackNavOptions}>
    <FavStack.Screen
      name="Your Favorites"
      component={FavoritesScreen}
      options={(navigationData) => ({
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="Menu"
              iconName="ios-menu"
              onPress={() => {
                navigationData.navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        ),
      })}
    />
    <FavStack.Screen name="MealDetail" component={MealDetailScreen} />
  </FavStack.Navigator>
);

const MealsFavTabNavigator = () => (
  <MaterialBottomTab.Navigator activeColor="white" shifting={true}>
    <MaterialBottomTab.Screen
      name="Meals"
      component={MealsNavigator}
      options={{
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-restaurant" size={24} color={tabInfo.color} />
        ),
        tabBarColor: colors.primaryColor,
      }}
    />
    <MaterialBottomTab.Screen
      name="Favorites"
      component={FavNavigator}
      options={{
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-star" size={24} color={tabInfo.color} />
        ),
        tabBarColor: colors.accentColor,
      }}
    />
  </MaterialBottomTab.Navigator>
);

const MainNavigator = () => (
  <FavoritesContextProvider>
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: colors.accentColor,
          drawerInactiveTintColor: "white",
          drawerActiveBackgroundColor: colors.primaryColor,
          drawerLabelStyle: { fontFamily: "open-sans" },
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerTitleStyle: {
            fontFamily: "open-sans-bold",
          },
          drawerContentStyle: {
            backgroundColor: "#555",
          },
          headerTintColor: "white",
        }}
      >
        <Drawer.Screen
          name="All Meals"
          component={MealsFavTabNavigator}
          options={{ drawerLabel: "Meals", headerShown: false }}
        />
        <Drawer.Screen
          name="Filters"
          component={FiltersScreen}
          options={(navigationData) => ({
            drawerLabel: "Filters",
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => {
                    navigationData?.navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            ),
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  </FavoritesContextProvider>
);

export default MainNavigator;
