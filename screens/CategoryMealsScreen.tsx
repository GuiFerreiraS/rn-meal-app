import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

interface CategoryMealScreenProps {
  navigation: StackNavigationProp<{ MealDetail: { mealId: string } }>;
  route: RouteProp<{ CategoryMeals: { categoryId: string } }>;
}

const CategoryMealScreen = ({ navigation, route }: CategoryMealScreenProps) => {
  const catId = route?.params?.categoryId;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({});

export default CategoryMealScreen;
