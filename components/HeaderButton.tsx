import {
  HeaderButton,
  HeaderButtonProps,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";

interface CustomHeaderButtonProps extends HeaderButtonProps {}

const CustomHeaderButton = (props: CustomHeaderButtonProps) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color="white"
    />
  );
};

export default CustomHeaderButton;
