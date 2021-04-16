import React, { useMemo, useEffect, useReducer, useContext, Fragment } from 'react';
import { enableScreens } from "react-native-screens";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login/'

import HeaderLeft from "./components/parts/left-header";
import HeaderRight from "./components/parts/right-header";
import Drawer from './components/Drawer/'
import SubjectsSingle from './components/subjects/subjectSingle/subjectSingleTabs'
import ContentsSingle from './components/subjects/subjectSingle/subjectSingleContents/ContentsSingle/ContentsSingleScreenStack'

const screensStackNavigator = createStackNavigator();

import ContextStore from './Context/AuthContext';
import { AuthContext } from './Context/AuthContext';

enableScreens(); //Enable screens support before any of your navigation screens renders.

function App({ navigation }) {
const {state} = useContext(AuthContext);

  return (
    	<NavigationContainer>
        <screensStackNavigator.Navigator>
          {
            state.userToken === null ? 
            <screensStackNavigator.Screen
                name="Login"
                component={Login}
                options={{
                  title: 'Sign in',
                  headerShown: false,
                  // When logging out, a pop animation feels intuitive
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}
              /> : 
              <Fragment>
              <screensStackNavigator.Screen 
              name="O&M@S App" 
              component={Drawer}
              options={(props) => ({
              headerLeft: () => <HeaderLeft />,
              headerRight: () => <HeaderRight />,
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "#164b6b",
                },
              })}
            />

            <screensStackNavigator.Screen 
              name="SubjectsSingle" 
              component={SubjectsSingle}
              options={{
		          headerShown: false,
		        }}
            />

            <screensStackNavigator.Screen
              name="ContentsSingle"
              component={ContentsSingle}
              options={{
		          headerShown: false,
		        }}
            />

            </Fragment>
          }
        </screensStackNavigator.Navigator>
      </NavigationContainer>
  );
}

export default () => {
  return (
    <ContextStore>
      <App />
    </ContextStore>
  );
};