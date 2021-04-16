import React from "react";
import { Icon } from "react-native-elements";

//NAVIGATION 5
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//SCREENS STACKS
import SubjectContentScreenStack from "./subjectSingleContents/subjectSingleContentsScreenStack";
import SubjectSingleScreenStack from "./subjectSingleScreenStack";
import SubjectSyllabusScreenStack from "./subjectSingleSyllabus/subjectSingleSyllabusScreenStack";
import SubjectDisscussTopicsScreenStack from "./subjectSingleDisscussTopics/subjectSingleDisscussTopicsScreenStack";

const SubjectSingleTabNavigator = createBottomTabNavigator();
function SubjectSingleTabs(props) {
  return (
    <SubjectSingleTabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName, iconType;

          if (route.name === "Inicio") {
            iconType = "font-awesome-5";

            iconName = focused ? "house-user" : "house-user";
          } else if (route.name === "Syllabus") {
            iconType = "font-awesome-5";

            iconName = focused ? "book-reader" : "book-reader";
          } else if (route.name === "Contenido") {
            iconType = "font-awesome";

            iconName = focused ? "folder-open" : "folder-open";
          } else if (route.name === "Temas de discusión") {
            iconType = "font-awesome";

            iconName = focused ? "comments" : "comments";
          }
          // You can return any component that you like here!
          return (
            <Icon name={iconName} size={size} type={iconType} color={color} />
          );
        },
      })}
      tabBarOptions={{
        showIcon: true,
        activeTintColor: "#164b6b",
        inactiveTintColor: "gray",
      }}
    >
      <SubjectSingleTabNavigator.Screen
        name="Inicio"
        children={() => <SubjectSingleScreenStack subjectTitle={props.route.params.subjectTitle} subjectItem={props.route.params.subjectItem} />}
      />
      <SubjectSingleTabNavigator.Screen
        name="Syllabus"
        children={() => <SubjectSyllabusScreenStack subjectTitle={props.route.params.subjectTitle} />}
      />
      <SubjectSingleTabNavigator.Screen
        name="Contenido"
        children={(ownProps) => <SubjectContentScreenStack navigation={ownProps} subjectTitle={props.route.params.subjectTitle} subjectItem={props.route.params.subjectItem} />}
      />
      <SubjectSingleTabNavigator.Screen
        name="Temas de discusi&oacute;n"
        children={() => <SubjectDisscussTopicsScreenStack headerTitle={props.route.params.subjectTitle} navigation={props.navigation} />}
      />
    </SubjectSingleTabNavigator.Navigator>
  );
}

export default SubjectSingleTabs;