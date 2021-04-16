import React from "react";
import { Text } from "react-native";

//NAVIGATION 5
import { createStackNavigator } from "@react-navigation/stack";

//HEADERS
import HeaderLeft from "../parts/left-header";
import HeaderRight from "../parts/right-header";

//SCREENS
import ForumScreen from "./forum";

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
          (Foro de discusi&oacute;n)
        </Text>{" "}
      </Text>
    ),
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#164b6b",
    },
  };
};

const ForumScreenStackNavigator = createStackNavigator();
function ForumScreenStack() {
  return (
    <ForumScreenStackNavigator.Navigator
      screenOptions={(props) => defaultStackNavOptions(props)}
    >
      <ForumScreenStackNavigator.Screen
        name="Foro de discusi&oacute;n"
        component={ForumScreen}
      />
    </ForumScreenStackNavigator.Navigator>
  );
}
export default ForumScreenStack;