import React from "react";
import { Text } from "react-native";

//NAVIGATION 5
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS
import SubjectSingleContentsSingleScreen from "./ContentsSingle";
import HeaderRight from '../../../../parts/right-header'

const SubjectSingleContentsSingleScreenStackNavigator = createStackNavigator();
function SubjectSingleContentsSingleScreenStack(props) {
  console.log(props)
  return (
    <SubjectSingleContentsSingleScreenStackNavigator.Navigator>
      <SubjectSingleContentsSingleScreenStackNavigator.Screen
        name="Ver contenido de categoria"
        options={() => ({
                headerRight: () => <HeaderRight />,
                title: props.route.params.subjectTitle,
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "#164b6b",
                },
              })}
        children={() => <SubjectSingleContentsSingleScreen {...props} />}
      />
    </SubjectSingleContentsSingleScreenStackNavigator.Navigator>
  );
}
export default SubjectSingleContentsSingleScreenStack;