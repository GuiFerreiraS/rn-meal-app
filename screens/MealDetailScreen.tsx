import { StyleSheet, Text, View } from "react-native";
import {
  NavigationStackProp,
  NavigationStackScreenComponent,
} from "react-navigation-stack";
import { MEALS } from "../data/dummy-data";

interface MealDetailsScreenProps {
  navigation: NavigationStackProp;
}

const MealDetailsScreen = ({ navigation }: MealDetailsScreenProps) => {
  const mealId = navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>The Meal Details Screen! {selectedMeal?.title}</Text>
    </View>
  );
};

(MealDetailsScreen as NavigationStackScreenComponent).navigationOptions = (
  navigationData
) => {
  const catId = navigationData.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedMeal?.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailsScreen;
