import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import DefaultText from "./DefaultText";

interface MealItemProps {
  onSelect?: () => void;
  title: string;
  duration: number;
  complexity: string;
  affordability: string;
  image: string;
}

const MealItem = ({
  onSelect,
  title,
  duration,
  complexity,
  affordability,
  image,
}: MealItemProps) => {
  return (
    <TouchableNativeFeedback onPress={onSelect}>
      <View style={styles.mealItem}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground source={{ uri: image }} style={styles.bgImage}>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
          <DefaultText>{duration}m</DefaultText>
          <DefaultText>{complexity.toUpperCase()}</DefaultText>
          <DefaultText>{affordability.toUpperCase()}</DefaultText>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 220,
    width: "95%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
    elevation: 5,
  },
  mealRow: { flexDirection: "row" },
  mealHeader: {
    height: "85%",
  },
  mealDetails: {
    height: "15%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center",
  },
});

export default MealItem;
