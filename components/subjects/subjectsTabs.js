import React from "react";
import { Icon } from "react-native-elements";

//NAVIGATION 5
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//SCREENS STACKS
import SupportScreenStack from "../support/supportScreenStack";
import SubjectsScreenStack from "./subjectsScreenStack";
import PersonalDataScreenStack from "../personal-data-form/personal-data-form-screen-stack";
import SettingsScreenStack from "../settings/settingsScreenStack";

const defaultStackNavOptions = {
  headerTitle: "O&M@S App",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#164b6b",
  },
};

const SubjectsTabNavigator = createBottomTabNavigator();
function SubjectsTabs(props) {
  return (
    <SubjectsTabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName, iconType;

          if (route.name === "Asignaturas") {
            iconType = "font-awesome-5";

            iconName = focused ? "book" : "book";
          } else if (route.name === "Datos personales") {
            iconType = "font-awesome-5";

            iconName = focused ? "user-cog" : "user-cog";
          } else if (route.name === "Soporte") {
            iconType = "font-awesome-5";

            iconName = focused ? "info" : "info";
          } else if (route.name === "Ajustes") {
            iconType = "font-awesome-5";

            iconName = focused ? "cog" : "cog";
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
      <SubjectsTabNavigator.Screen
        name="Asignaturas"
        children={() => <SubjectsScreenStack {...props} /> }
      />
      <SubjectsTabNavigator.Screen
        name="Datos personales"
        component={PersonalDataScreenStack}
      />
      <SubjectsTabNavigator.Screen
        name="Soporte"
        component={SupportScreenStack}
      />
      <SubjectsTabNavigator.Screen
        name="Ajustes"
        component={SettingsScreenStack}
      />
    </SubjectsTabNavigator.Navigator>
  );
}

export default SubjectsTabs;