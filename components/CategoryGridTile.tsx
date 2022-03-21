import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import Category from "../models/category";

interface CategoryGridTileProps {
  onSelect: () => void;
  title: string;
  color: string;
}

const CategoryGridTile = ({
  onSelect,
  title,
  color,
}: CategoryGridTileProps) => {
  return (
    <TouchableNativeFeedback onPress={onSelect}>
      <View style={{ ...styles.gridItem, backgroundColor: color }}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});

export default CategoryGridTile;
