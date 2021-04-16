import React from "react";
import { Text } from "react-native";

//NAVIGATION 5
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS
import SubjectSingleSyllabusScreen from "./subjectSingleSyllabus";
import HeaderRight from '../../../parts/right-header'

const SubjectSingleSyllabusScreenStackNavigator = createStackNavigator();
function SubjectSingleSyllabusScreenStack(props) {

  return (
    <SubjectSingleSyllabusScreenStackNavigator.Navigator>
      <SubjectSingleSyllabusScreenStackNavigator.Screen
        name="Pagina de asignatura para syllabus"
        options={() => ({
                headerRight: () => <HeaderRight />,
                title: props.subjectTitle,
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "#164b6b",
                },
              })}
        component={SubjectSingleSyllabusScreen}
      />
    </SubjectSingleSyllabusScreenStackNavigator.Navigator>
  );
}
export default SubjectSingleSyllabusScreenStack;