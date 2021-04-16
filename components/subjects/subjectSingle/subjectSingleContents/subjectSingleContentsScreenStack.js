import React from "react";
import { Text } from "react-native";

//NAVIGATION 5
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS
import SubjectSingleContentsScreen from "./subjectSingleContents";

import HeaderRight from '../../../parts/right-header'

const SubjectSingleContentsScreenStackNavigator = createStackNavigator();
function SubjectSingleContentsScreenStack(props) {
  return (
    <SubjectSingleContentsScreenStackNavigator.Navigator>
      <SubjectSingleContentsScreenStackNavigator.Screen
        name="Pagina de asignatura para contenidos"
        options={() => ({
                headerRight: () => <HeaderRight />,
                title: props.subjectTitle,
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "#164b6b",
                },
              })}
        children={() => <SubjectSingleContentsScreen {...props} />}
      />
    </SubjectSingleContentsScreenStackNavigator.Navigator>
  );
}
export default SubjectSingleContentsScreenStack;