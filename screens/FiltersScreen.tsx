import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import colors from "../constants/colors";

const FiltersSwitch = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{ true: colors.primaryColor }}
        thumbColor={colors.primaryColor}
      />
    </View>
  );
};

const FiltersScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<{ Filters: { save: () => void } }>;
}) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="Save" iconName="ios-save" onPress={saveFilters} />
        </HeaderButtons>
      ),
    });
  }, [navigation, saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FiltersSwitch
        label="Gluten-free"
        value={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FiltersSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FiltersSwitch
        label="Vegan"
        value={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FiltersSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
});

export default FiltersScreen;
