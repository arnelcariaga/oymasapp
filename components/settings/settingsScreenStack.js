import React from "react";
import { Text } from "react-native";

//NAVIGATION 5
import { createStackNavigator } from "@react-navigation/stack";

//HEADERS
import HeaderLeft from "../parts/left-header";
import HeaderRight from "../parts/right-header";

//SCREENS
import SettingsScreen from "./settings.js";

//STACKS
/*const defaultStackNavOptions = (props) => {
  return {
    headerLeft: () => <HeaderLeft />,
    headerRight: () => <HeaderRight {...props} />,
    headerTitle: () => (
      <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
        {" "}
        O&M@S App{" "}
        <Text style={{ fontSize: 13, fontWeight: "normal" }}>
          (Ajustes de la app)
        </Text>{" "}
      </Text>
    ),
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#164b6b",
    },
  };
};*/

const SettingsScreenStackNavigator = createStackNavigator();
function SettingsScreenStack() {
  return (
    <SettingsScreenStackNavigator.Navigator>
      <SettingsScreenStackNavigator.Screen
        name="Ajustes"
        component={SettingsScreen}
        options={{
                  headerShown: false,
                }}
      />
    </SettingsScreenStackNavigator.Navigator>
  );
}
export default SettingsScreenStack;