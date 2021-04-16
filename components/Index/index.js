import React from "react";
import { Icon } from "react-native-elements";

//NAVIGATION 5
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//SCREENS STACKS
import IndexScreenStack from "./indexScreenStack.js";
import PersonalDataScreenStack from "../personal-data-form/personal-data-form-screen-stack";
import SupportScreenStack from "../support/supportScreenStack";
import SettingsScreenStack from "../settings/settingsScreenStack";

const IndexTabNavigator = createBottomTabNavigator();
function IndexTabs() {
  return (
    <IndexTabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName, iconType;

          if (route.name === "Inicio") {
            iconType = "font-awesome-5";

            iconName = focused ? "house-user" : "house-user";
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
      <IndexTabNavigator.Screen 
        name="Inicio" 
        component={IndexScreenStack} 
      />
      <IndexTabNavigator.Screen
        name="Datos personales"
        component={PersonalDataScreenStack}
      />
      <IndexTabNavigator.Screen 
        name="Soporte" 
        component={SupportScreenStack} 
      />
      <IndexTabNavigator.Screen
        name="Ajustes"
        component={SettingsScreenStack}
      />
    </IndexTabNavigator.Navigator>
  );
}

export default IndexTabs;