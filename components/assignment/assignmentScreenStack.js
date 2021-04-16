import React from "react";
import { Text } from "react-native";

//NAVIGATION 5
import { createStackNavigator } from "@react-navigation/stack";

//HEADERS
import HeaderLeft from "../parts/left-header";
import HeaderRight from "../parts/right-header";

//SCREENS
import AssignmentScreen from "./assignment";

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
          (Asignaci&oacute;n)
        </Text>{" "}
      </Text>
    ),
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#164b6b",
    },
  };
};

const AssignmentScreenStackNavigator = createStackNavigator();
function AssignmentScreenStack() {
  return (
    <AssignmentScreenStackNavigator.Navigator
      screenOptions={(props) => defaultStackNavOptions(props)}
    >
      <AssignmentScreenStackNavigator.Screen
        name="Asignaci&oacute;n"
        component={AssignmentScreen}
      />
    </AssignmentScreenStackNavigator.Navigator>
  );
}
export default AssignmentScreenStack;