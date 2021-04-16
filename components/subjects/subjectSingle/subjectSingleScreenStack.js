import React from "react";
import { Text } from "react-native";

//NAVIGATION 5
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS
import SubjectSingleScreen from "./subjectSingle";
import HeaderRight from '../../parts/right-header'

const SubjectSingleScreenStackNavigator = createStackNavigator();
function SubjectSingleScreenStack(props) {
  const subjectTitle = props.subjectTitle
  const subjectItem = props.subjectItem

  return (
    <SubjectSingleScreenStackNavigator.Navigator>
      <SubjectSingleScreenStackNavigator.Screen
        name="Bienvenida a la asignaturas"
        options={(props) => ({
                headerRight: () => <HeaderRight />,
                title: subjectTitle,
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "#164b6b",
                },
              })}
        children={() => <SubjectSingleScreen subjectItem={subjectItem} />}
      />
    </SubjectSingleScreenStackNavigator.Navigator>
  );
}
export default SubjectSingleScreenStack;