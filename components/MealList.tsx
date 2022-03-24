import { StackNavigationProp } from "@react-navigation/stack";
import {
  FlatList,
  ListRenderItem,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import Meal from "../models/meal";
import MealItem from "./MealItem";

interface MealListProps {
  listData: Meal[];
  navigation: StackNavigationProp<{ MealDetail: { mealId: string } }>;
}

const MealList = ({ listData, navigation }: MealListProps) => {
  const renderMealItem: ListRenderItem<Meal> = (itemData) => (
    <MealItem
      title={itemData.item.title}
      onSelect={() =>
        navigation.navigate({
          name: "MealDetail",
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
    <View style={styles.screenList}>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor="transparent"
      ></StatusBar>
      <FlatList
        contentContainerStyle={styles.list}
        data={listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
