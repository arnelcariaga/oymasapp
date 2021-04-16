import React from "react";
import { Text } from "react-native";

//NAVIGATION 5
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS
import SubjectsScreen from "./subjects";

const SubjectsScreenStackNavigator = createStackNavigator();
function SubjectsScreenStack() {
  return (
    <SubjectsScreenStackNavigator.Navigator>
      <SubjectsScreenStackNavigator.Screen
        name="O&M@S App (Asignaturas)"
        component={SubjectsScreen}
        options={{
              headerShown: false,
            }}
      />
    </SubjectsScreenStackNavigator.Navigator>
  );
}
export default SubjectsScreenStack;