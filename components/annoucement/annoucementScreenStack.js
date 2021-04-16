import React from "react";
import { Text } from "react-native";

//NAVIGATION 5
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS
import AnnoucementScreen from "./annoucement";

const AnnoucementScreenStackNavigator = createStackNavigator();
function AnnoucementScreenStack() {
  return (
    <AnnoucementScreenStackNavigator.Navigator>
      <AnnoucementScreenStackNavigator.Screen
        name="O&M@S App (Anuncios)"
        component={AnnoucementScreen}
        options={{
              headerShown: false,
            }}
      />
    </AnnoucementScreenStackNavigator.Navigator>
  );
}
export default AnnoucementScreenStack;