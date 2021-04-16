import React from "react";
import { Text } from "react-native";

//NAVIGATION 5
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS
import Profile from "./Profile";

const IndexScreenStackNavigator = createStackNavigator();
function IndexScreenStack() {
  return (
    <IndexScreenStackNavigator.Navigator>
      <IndexScreenStackNavigator.Screen
        name="IndexScreenStack"
      	component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </IndexScreenStackNavigator.Navigator>
  );
}
export default IndexScreenStack;