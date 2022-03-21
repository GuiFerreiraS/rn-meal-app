import {
  Button,
  FlatList,
  ListRenderItem,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  NavigationStackProp,
  NavigationStackScreenComponent,
} from "react-navigation-stack";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

interface CategoryMealScreenProps {
  navigation: NavigationStackProp;
}

const CategoryMealScreen = ({ navigation }: CategoryMealScreenProps) => {
  const catId = navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

(CategoryMealScreen as NavigationStackScreenComponent).navigationOptions = (
  navigationData
) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory?.title,
  };
};

const styles = StyleSheet.create({});

export default CategoryMealScreen;
