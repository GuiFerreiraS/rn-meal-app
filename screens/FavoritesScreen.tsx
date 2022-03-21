import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import {
  NavigationStackProp,
  NavigationStackScreenComponent,
} from "react-navigation-stack";
import CustomHeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

interface FavoritesScreenProps {
  navigation: NavigationStackProp;
}

const FavoritesScreen = ({ navigation }: FavoritesScreenProps) => {
  const favoriteMeals = MEALS.filter((meal) =>
    ["m1", "m2", "m5"].some((id) => id === meal.id)
  );

  return <MealList listData={favoriteMeals} navigation={navigation} />;
};

(FavoritesScreen as NavigationStackScreenComponent).navigationOptions = () => {
  return {
    headerTitle: "Your favorites",
  };
};

(FavoritesScreen as any).navigationOptions = (navigationData: any) => ({
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
});

export default FavoritesScreen;
