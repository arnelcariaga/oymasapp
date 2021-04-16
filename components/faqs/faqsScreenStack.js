import React from "react";
import { Text } from "react-native";

//NAVIGATION 5
import { createStackNavigator } from "@react-navigation/stack";

//HEADERS
import HeaderLeft from "../parts/left-header";
import HeaderRight from "../parts/right-header";

//SCREENS
import FaqsScreen from "./faqs";

//STACKS
const defaultStackNavOptions = (props) => {
  return {
    headerLeft: () => <HeaderLeft />,
    headerRight: () => <HeaderRight {...props} />,
    headerTitle: () => (
      <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
        {" "}
        O&M@S App{" "}
        <Text style={{ fontSize: 13, fontWeight: "normal" }}>
          (Preguntas frecuentes)
        </Text>{" "}
      </Text>
    ),
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#164b6b",
    },
  };
};

const FaqsScreenStackNavigator = createStackNavigator();
function FaqsScreenStack() {
  return (
    <FaqsScreenStackNavigator.Navigator
      screenOptions={(props) => defaultStackNavOptions(props)}
    >
      <FaqsScreenStackNavigator.Screen
        name="Preguntas frecuentes"
        component={FaqsScreen}
      />
    </FaqsScreenStackNavigator.Navigator>
  );
}
export default FaqsScreenStack;