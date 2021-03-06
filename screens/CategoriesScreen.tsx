import { StackNavigationProp } from "@react-navigation/stack";
import { ListRenderItem, StatusBar, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";

interface CategoriesScreenProps {
  navigation: StackNavigationProp<{ CategoryMeals: { categoryId: string } }>;
}

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  const renderGridItem: ListRenderItem<Category> = (itemData) => {
    return (
      <CategoryGridTile
        onSelect={() =>
          navigation.navigate({
            name: "CategoryMeals",
            params: { categoryId: itemData.item.id },
          })
        }
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };

  return (
    <View>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor="transparent"
      ></StatusBar>
      <FlatList
        keyExtractor={(item) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
