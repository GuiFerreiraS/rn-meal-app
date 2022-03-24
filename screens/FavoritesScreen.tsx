import { StackNavigationProp } from "@react-navigation/stack";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { useFavoriteContext } from "../store/context/favorites-context";

interface FavoritesScreenProps {
  navigation: StackNavigationProp<{ MealDetail: { mealId: string } }>;
}

const FavoritesScreen = ({ navigation }: FavoritesScreenProps) => {
  const { ids } = useFavoriteContext();

  const favoriteMeals = MEALS.filter((meal) =>
    ids.some((id) => id === meal.id)
  );

  return <MealList listData={favoriteMeals} navigation={navigation} />;
};

export default FavoritesScreen;
