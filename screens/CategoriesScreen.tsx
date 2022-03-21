import { ListRenderItem, StatusBar, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { NavigationStackProp } from "react-navigation-stack";
import CategoryGridTile from "../components/CategoryGridTile";
import CustomHeaderButton from "../components/HeaderButton";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";

interface CategoriesScreenProps {
  navigation: NavigationStackProp;
}

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  const renderGridItem: ListRenderItem<Category> = (itemData) => {
    return (
      <CategoryGridTile
        onSelect={() =>
          navigation.navigate({
            routeName: "CategoryMeals",
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

(CategoriesScreen as any).navigationOptions = (navigationData: any) => ({
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

export default CategoriesScreen;
