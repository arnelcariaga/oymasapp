import React, { useState, useMemo, useReducer, useEffect } from "react";

import * as SecureStore from 'expo-secure-store';

export const AuthContext = React.createContext();

const ContextStore = ({ children }) => {
  const [signIn, setSignIn] = useState()
  const [signOut, setSignOut] = useState()

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const handleSignIn = async () => {
    await SecureStore.setItemAsync("userToken", "dummy-auth-token");
    dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
  }

  const handleSignOut = async () => {
    dispatch({ type: 'SIGN_OUT' })
  }

  return (
    <AuthContext.Provider value={{
      handleSignIn,
      handleSignOut,
      state
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextStore;