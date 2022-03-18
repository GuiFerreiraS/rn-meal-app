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

  const renderMealItem: ListRenderItem<Meal> = (itemData) => (
    <MealItem
      title={itemData.item.title}
      onSelect={() =>
        navigation.navigate({
          routeName: "MealDetail",
          params: { mealId: itemData.item.id },
        })
      }
      duration={itemData.item.duration}
      complexity={itemData.item.complexity}
      affordability={itemData.item.affordability}
      image={itemData.item.imageURL}
    />
  );

  return (
    <View style={styles.screen}>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor="transparent"
      ></StatusBar>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
});

export default CategoryMealScreen;
