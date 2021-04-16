import React from "react";
import { Text } from "react-native";

//NAVIGATION 5
import { createStackNavigator } from "@react-navigation/stack";

//HEADERS
import HeaderLeft from "../parts/left-header";
import HeaderRight from "../parts/right-header";

//SCREENS
import SupportScreen from "./support.js";

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
          (Soporte)
        </Text>{" "}
      </Text>
    ),
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#164b6b",
    },
  };
};*/

const SupportScreenStackNavigator = createStackNavigator();
function SupportScreenStack() {
  return (
    <SupportScreenStackNavigator.Navigator>
      <SupportScreenStackNavigator.Screen
        name="Soporte"
        component={SupportScreen}
        options={{
                  headerShown: false,
                }}
      />
    </SupportScreenStackNavigator.Navigator>
  );
}
export default SupportScreenStack;