import React from "react";
import { Text } from "react-native";

//NAVIGATION 5
import { createStackNavigator } from "@react-navigation/stack";

//HEADERS
import HeaderLeft from "../parts/left-header";
import HeaderRight from "../parts/right-header";

//SCREENS
import DigitalResourcesScreen from "./digital-resources";

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
          (Recursos digitales)
        </Text>{" "}
      </Text>
    ),
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#164b6b",
    },
  };
};

const DigitalResourcesScreenStackNavigator = createStackNavigator();
function DigitalResourcesScreenStack() {
  return (
    <DigitalResourcesScreenStackNavigator.Navigator
      screenOptions={(props) => defaultStackNavOptions(props)}
    >
      <DigitalResourcesScreenStackNavigator.Screen
        name="Recursos digitales"
        component={DigitalResourcesScreen}
      />
    </DigitalResourcesScreenStackNavigator.Navigator>
  );
}
export default DigitalResourcesScreenStack;