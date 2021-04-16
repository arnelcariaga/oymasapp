import React from "react";
import { Icon } from "react-native-elements";

//NAVIGATION 5
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//SCREENS STACKS
import SupportScreenStack from "../support/supportScreenStack";
import ConferencesScreenStack from "./conferencesScreenStack";
import PersonalDataScreenStack from "../personal-data-form/personal-data-form-screen-stack";
import SettingsScreenStack from "../settings/settingsScreenStack";

const ConferencesTabNavigator = createBottomTabNavigator();
function SubjectsTabs() {
  return (
    <ConferencesTabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName, iconType;

          if (route.name === "Videoconferencias") {
            iconType = "font-awesome-5";

            iconName = focused ? "users" : "users";
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
      <ConferencesTabNavigator.Screen
        name="Videoconferencias"
        component={ConferencesScreenStack}
      />
      <ConferencesTabNavigator.Screen
        name="Datos personales"
        component={PersonalDataScreenStack}
      />
      <ConferencesTabNavigator.Screen
        name="Soporte"
        component={SupportScreenStack}
      />
      <ConferencesTabNavigator.Screen
        name="Ajustes"
        component={SettingsScreenStack}
      />
    </ConferencesTabNavigator.Navigator>
  );
}

export default SubjectsTabs;