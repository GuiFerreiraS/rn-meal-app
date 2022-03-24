import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useLayoutEffect } from "react";
import { Image } from "react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DefaultText from "../components/DefaultText";
import CustomHeaderButton from "../components/HeaderButton";
import { MEALS } from "../data/dummy-data";
import { useFavoriteContext } from "../store/context/favorites-context";

interface MealDetailsScreenProps {
  route: RouteProp<{ MealDetail: { mealId: string } }>;
  navigation: StackNavigationProp<{ MealDetail: {} }>;
}

const ListItem = ({ children }: { children: string }) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  );
};

const MealDetailsScreen = ({ route, navigation }: MealDetailsScreenProps) => {
  const mealId = route?.params?.mealId;
  const { addFavorite, removeFavorite, ids } = useFavoriteContext();

  const mealIsFavorite = ids.includes(mealId);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName={mealIsFavorite ? "star" : "star-outline"}
            onPress={
              mealIsFavorite
                ? removeFavorite.bind(this, mealId)
                : addFavorite.bind(this, mealId)
            }
          />
        </HeaderButtons>
      ),
    });
  });

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal?.imageURL }} style={styles.image} />

      <View style={styles.details}>
        <DefaultText>{selectedMeal?.duration}m</DefaultText>
        <DefaultText>{selectedMeal?.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal?.affordability.toUpperCase()}</DefaultText>
      </View>

      <Text style={styles.title}>Ingredientes</Text>
      {selectedMeal?.ingredientes.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}

      <Text style={styles.title}>Steps</Text>
      {selectedMeal?.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailsScreen;
