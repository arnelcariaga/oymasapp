import React, { useContext } from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as SecureStore from 'expo-secure-store';

import OptionsMenu from "./option-menu";

import {AuthContext} from '../../Context/AuthContext';

import urlFetch from './urls-fetch';

var fdNotifi = new FormData();

const RightHeader = () => {
  const {handleSignOut} = useContext(AuthContext);

  const myIcon = (
    <Icon name="ellipsis-v" size={20} type="font-awesome-5" color="#fff" />
    );

  async function logoutFunc() {
    try {
      const userEnrollment = await AsyncStorage.getItem("@userEnrollment");

      fdNotifi.append("userEnrollment", userEnrollment)

      await fetch(urlFetch() + "NOTIFICATION/unRegisterDevice.php", {
        method: 'POST',
        body: fdNotifi,
      }).then((response) => response.json())
      .then((res) => {
        //console.log(res)
      });

      await AsyncStorage.clear()
      await SecureStore.deleteItemAsync('userToken');

      handleSignOut()
    } catch(e) {
      // clear error
    }
  }

  return (
    <View style={{ marginRight: 15, marginTop: 5 }}>
    <OptionsMenu
    customButton={myIcon}
    destructiveIndex={1}
    options={["Cambiar periodo", "Acerca de", "Salir"]}
    actions={[logoutFunc, logoutFunc, logoutFunc]}
    />
    </View>
    );
};

export default RightHeader;