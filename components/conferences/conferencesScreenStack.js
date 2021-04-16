import React from "react";
import { Text } from "react-native";

//NAVIGATION 5
import { createStackNavigator } from "@react-navigation/stack";

//HEADERS
import HeaderLeft from "../parts/left-header";
import HeaderRight from "../parts/right-header";

//SCREENS
import ConferencesScreen from "./conferences";

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
          (Videos conferencias)
        </Text>{" "}
      </Text>
    ),
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#164b6b",
    },
  };
};

const ConferencesScreenStackNavigator = createStackNavigator();
function ConferencesScreenStack() {
  return (
    <ConferencesScreenStackNavigator.Navigator
      screenOptions={(props) => defaultStackNavOptions(props)}
    >
      <ConferencesScreenStackNavigator.Screen
        name="Videoconferencias"
        component={ConferencesScreen}
      />
    </ConferencesScreenStackNavigator.Navigator>
  );
}
export default ConferencesScreenStack;