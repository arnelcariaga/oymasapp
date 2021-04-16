import React, { useCallback } from "react";
import { Alert, BackHandler } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

const useExitOnBack = () => {
  useFocusEffect(
    React.useCallback(() => {
      const handleBackPress = () => {
        Alert.alert(
          "App O&M@S",
          "¿ Salir de la aplicación ?",
          [
            {
              text: "Cancelar",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "Aceptar", onPress: () => BackHandler.exitApp() },
          ],
          { cancelable: false }
        );
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }, []),
  );
};

export default useExitOnBack