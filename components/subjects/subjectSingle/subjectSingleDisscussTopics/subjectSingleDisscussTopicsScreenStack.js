import React from "react";
import { Text } from "react-native";

//NAVIGATION 5
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS
import SubjectSingleDisscussTopicsScreen from "./subjectSingleDisscussTopics";

const SubjectSingleDisscussTopicsScreenStackNavigator = createStackNavigator();
function SubjectSingleDisscussTopicsScreenStack(props) {
  return (
    <SubjectSingleDisscussTopicsScreenStackNavigator.Navigator>
      <SubjectSingleDisscussTopicsScreenStackNavigator.Screen
        name="Bienvenida a la asignaturas"
        options={{
          headerShown: false,
        }}
        children={() => <SubjectSingleDisscussTopicsScreen {...props} />}
      />
    </SubjectSingleDisscussTopicsScreenStackNavigator.Navigator>
  );
}
export default SubjectSingleDisscussTopicsScreenStack;