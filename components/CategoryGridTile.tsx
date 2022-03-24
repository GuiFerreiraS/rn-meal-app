import { Pressable, StyleSheet, Text, View } from "react-native";

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
    <View style={styles.buttonView}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={{ ...styles.gridItem, backgroundColor: color }}
        onPress={onSelect}
      >
        <View>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    borderRadius: 10,
    flex: 1,
    overflow: "hidden",
    margin: 15,
    elevation: 5,
  },
  gridItem: {
    height: 150,
    borderRadius: 10,
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
