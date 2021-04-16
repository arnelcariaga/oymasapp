import React from "react";
import { Icon } from "react-native-elements";

//NAVIGATION 5
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//SCREENS STACKS
import SupportScreenStack from "../support/supportScreenStack.js";
import AnnoucementScreenStack from "./annoucementScreenStack";
import PersonalDataScreenStack from "../personal-data-form/personal-data-form-screen-stack";
import SettingsScreenStack from "../settings/settingsScreenStack.js";

const AnnoucementTabNavigator = createBottomTabNavigator();
function AnnoucementTabs(props) {
  return (
    <AnnoucementTabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName, iconType;

          if (route.name === "Anuncios") {
            iconType = "font-awesome";

            iconName = focused ? "bell" : "bell";
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
      <AnnoucementTabNavigator.Screen
        name="Anuncios"
        children={() => <AnnoucementScreenStack {...props} /> }
      />
      <AnnoucementTabNavigator.Screen
        name="Datos personales"
        component={PersonalDataScreenStack}
      />
      <AnnoucementTabNavigator.Screen
        name="Soporte"
        component={SupportScreenStack}
      />
      <AnnoucementTabNavigator.Screen
        name="Ajustes"
        component={SettingsScreenStack}
      />
    </AnnoucementTabNavigator.Navigator>
  );
}

export default AnnoucementTabs;