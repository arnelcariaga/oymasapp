import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";
import { Avatar, Badge, Card } from "react-native-elements";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SubjectsTableProfile from "../parts/subjects-profile-table";
import Loading from "../parts/loading";
import urlFetch from '../parts/urls-fetch'

import useExitOnBack from '../parts/exit-app'

import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState([]);
  const [userEnrollment, setUserEnrollment] = useState("");
  const [loading, setLoading] = useState(true);

  const [a, setA] = useState();

  var fdUserInfo = new FormData();
  var fdNotifi = new FormData();

  useEffect(() => {
    var unmount = true;

    async function userDataFunc() {
      try {
        const userDataArray = JSON.parse(
          await AsyncStorage.getItem("@userData")
        );

        const userEnrollment = await AsyncStorage.getItem("@userEnrollment");

        if (userDataArray !== null) {
          for (var i = userDataArray.length - 1; i >= 0; i--) {
            fdUserInfo.append("user_entity", userDataArray[i].Entidad);
            fdUserInfo.append("user_name", userDataArray[i].Nombre);
            fdUserInfo.append("user_precinct", userDataArray[i].Recinto);
            fdUserInfo.append("Usuario", userDataArray[i].Usuario);
            fdUserInfo.append("emailA", userDataArray[i].emailA);
            fdUserInfo.append("emailI", userDataArray[i].emailI);
            fdUserInfo.append("fotoPerfil", userDataArray[i].fotoPerfil);
            fdUserInfo.append("estado_inscri", userDataArray[i].estado_inscri);
            fdUserInfo.append("estado_inscri_descripcion", userDataArray[i].estado_inscri_descripcion);
            fdUserInfo.append("tipoUsuarioDesc", userDataArray[i].tipoUsuarioDesc);
            fdUserInfo.append("periodo", userDataArray[i].periodo);
            fdUserInfo.append("periodoMonografico", userDataArray[i].periodoMonografico);
          }

          fetch(urlFetch() + "decrypted_login_data.php", {
            method: "POST",
            body: fdUserInfo,
          })
            .then((response) => response.json())
            .then((res) => {
              setUserData(res);
              setUserEnrollment(userEnrollment);
              setLoading(false);
            });
        } else {
          setUserData([]);
        }
      } catch (e) {
        // error reading value
      }
    }
    userDataFunc();

    return () => unmount = false;
  }, []);

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, [])

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync({
        experienceId: "@arnelcariaga/oymasapp"
      })).data;

      const userEnrollment = await AsyncStorage.getItem("@userEnrollment");
      
      fdNotifi.append("userEnrollment", userEnrollment)
      fdNotifi.append("expoPushToken", token)

      await fetch(urlFetch() + "NOTIFICATION/registerDevice.php", {
        method: 'POST',
        body: fdNotifi,
      }).then((response) => response.json())
            .then((res) => {
              //console.log(res)
            });

    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  }

  useExitOnBack()

  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.userInfoContainer}>
        <View>
          <Avatar rounded source={{ uri: userData.fotoPerfil }} size="large">
            <Avatar.Accessory size={25} />
          </Avatar>

          <Badge
            value={userData.estado_inscri_descripcion}
            status={userData.estado_inscri_descripcion === "NO ACTIVO" ? "error" : "success"}
            textStyle={{textTransform: 'capitalize'}}
            containerStyle={{ position: "absolute", top: -4, right: -4 }}
          ></Badge>
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userData.user_name} </Text>
          <Text style={styles.userEnrollment}>{userEnrollment}</Text>
          <Text style={styles.userPrecinct}>{userData.emailI === "No" || userData.emailI === "" ? "No tiene correo institucional" : userData.emailI }</Text>
          <Text style={styles.userEmail}>{userData.emailA === "No" || userData.emailA === "" ? "No tiene correo personal" : userData.emailA }</Text>
        </View>
      </View>

      <View style={{ paddingLeft: 20 }}>
        <Text style={styles.userPrecinct}>{userData.tipoUsuarioDesc}</Text>
        <Text style={styles.userPrecinct}>{userData.user_precinct}</Text>
      </View>

      <Card containerStyle={{ 
        borderRadius: 10, 
        backgroundColor: userData.estado_inscri === "NO REINSCRITO" ? "red" : "#4caf50"
      }}>
        <Text style={styles.txtNoSubscribe}>{userData.estado_inscri}</Text>
        <Text style={styles.txtNoSubscribe}>Enero/Abril 2021</Text>
      </Card>

      <Card containerStyle={styles.cardSubjects}>
        <Card.Title>Asignaturas periodo académico ENERO/ABRIL 2021</Card.Title>
        {/*<Card containerStyle={{backgroundColor: '#ccd6e3'}}>
          <Text>Usted no tiene asignaturas inscrita en este periodo.</Text>
        </Card>*/}
        <SubjectsTableProfile period={userData.periodo} periodoMonografico={userData.periodoMonografico} />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  userInfoContainer: {
    flex: -1,
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight - 10,
    marginLeft: "5%",
  },
  userInfo: {
    marginLeft: "5%",
  },
  userName: {
    fontWeight: "bold",
  },
  userEnrollment: {
    color: "gray",
  },
  userPrecinct: {
    color: "gray",
  },
  userEmail: {
    color: "gray",
  },
  txtNoSubscribe: {
    color: "#fff",
    fontSize: 18,
  },
  cardSubjects: {
    borderRadius: 10,
  },
});

export default Profile;