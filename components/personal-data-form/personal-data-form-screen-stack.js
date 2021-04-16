import React from "react";
import { Text } from "react-native";

//NAVIGATION 5
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS STACKS
import PersonalDataScreen from "./personal-data-form";

//HEADERS
import HeaderLeft from "../parts/left-header";
import HeaderRight from "../parts/right-header";

//STACKS
/*const defaultStackNavOptions = (props) => {
  return {
    headerLeft: () => <HeaderLeft />,
    headerRight: () => <HeaderRight {...props} />,
    headerTitle: () => (
      <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
        {" "}
        O&M@S App{" "}
        <Text style={{ fontSize: 13, fontWeight: "normal" }}>
          (Datos personales)
        </Text>{" "}
      </Text>
    ),
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#164b6b",
    },
  };
};*/

const PersonalDataScreenStackNavigator = createStackNavigator();
function PersonalDataScreenStack() {
  return (
    <PersonalDataScreenStackNavigator.Navigator>
      <PersonalDataScreenStackNavigator.Screen
        name="Datos personales"
        component={PersonalDataScreen}
        options={{
                  headerShown: false,
                }}
      />
    </PersonalDataScreenStackNavigator.Navigator>
  );
}

export default PersonalDataScreenStack;