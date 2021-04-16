import React from "react";
import { Text } from "react-native";

//NAVIGATION 5
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS
import SubjectSingleDisscussTopicsSingleScreen from "./subjectSingleDisscussTopicsSingle";

const SubjectSingleDisscussTopicsSingleScreenStackNavigator = createStackNavigator();
function SubjectSingleDisscussTopicsSingleScreenStack(props) {
  return (
    <SubjectSingleDisscussTopicsSingleScreenStackNavigator.Navigator>
      <SubjectSingleDisscussTopicsSingleScreenStackNavigator.Screen
        name="Ver tema de discusion"
        options={{
          headerShown: false,
        }}
        children={() => <SubjectSingleDisscussTopicsSingleScreen {...props} />}
      />
    </SubjectSingleDisscussTopicsSingleScreenStackNavigator.Navigator>
  );
}
export default SubjectSingleDisscussTopicsSingleScreenStack;