import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Input, Card, Button, Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

import token from '../parts/token'
import Loading from '../parts/loading'

const PersonalDataForm = () => {
  const [userInfo, setUserInfo] = useState([])
  const [noUserInfo, setNoUserInfo] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function userSubjectsDataFunc() {
      const userId = await AsyncStorage.getItem("@userId");

          fetch("https://app.oymas.edu.do/perfil/?uI="+userId+"&tk="+token())
            .then((response) => response.json())
            .then((res) => {
              if (res.Response_message.Error === "True") {
                setNoUserInfo(res.Response_message.Mensaje);
                setLoading(false)
              }else{
                setUserInfo(res["Perfil"]);
                setLoading(false)
              }
            });
    }
    userSubjectsDataFunc();
  }, []);

  if (loading) {
    return <Loading />
  }
  return (
      <ScrollView>
        <View style={{ flex: 1, margin: 25, marginTop: 0 }}>
          <Card
            containerStyle={{ backgroundColor: "#dbefdc", marginBottom: 25 }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Card.Title style={{ marginTop: 15 }}>
                Informaci&oacute;n!
              </Card.Title>
              <TouchableOpacity>
                <Icon name="close" size={20} color="#000" />
              </TouchableOpacity>
            </View>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>
              Los datos de contacto que usted suminsitre en este formulario no
              ser&aacute;n compartidos en la plataforma. Esta informaci&oacute;n
              es para uso de la Universidad.
            </Text>
          </Card>
              <Input
                value={userInfo.Nombre}
                disabled={true}
                label="Nombres"
                labelStyle={{ color: "#164b6b" }}
                leftIcon={{ color: "#003473", type: "font-awesome-5", name: "user" }}
                inputStyle={{ color: "#000", fontWeight: "bold", fontSize: 15 }}
                onChangeText={(value) => {}}
              />
              <Input
                value={userInfo.Apellidos}
                disabled={true}
                label="Apellidos"
                labelStyle={{ color: "#164b6b" }}
                leftIcon={{ color: "#003473", type: "font-awesome", name: "vcard-o" }}
                inputStyle={{ color: "#000", fontWeight: "bold", fontSize: 15 }}
                onChangeText={(value) => {}}
              />
              <Input
                value={userInfo.Correo}
                disabled={false}
                label="E-mail personal"
                labelStyle={{ color: "#164b6b" }}
                leftIcon={{ color: "#003473", type: "font-awesome", name: "envelope-o" }}
                inputStyle={{ color: "#000", fontWeight: "bold", fontSize: 15 }}
                onChangeText={(value) => {}}
              />
              <Input
                value={userInfo.CorreoInst}
                disabled={true}
                label="E-mail institucional"
                labelStyle={{ color: "#164b6b" }}
                leftIcon={{
                  color: "#003473",
                  type: "font-awesome-5",
                  name: "envelope-open-text",
                }}
                inputStyle={{ color: "#000", fontWeight: "bold", fontSize: 15 }}
                onChangeText={(value) => {}}
              />
              <Input
                value={userInfo.Telefono}
                disabled={true}
                label="Tel&eacute;fono residencial"
                labelStyle={{ color: "#164b6b" }}
                leftIcon={{ color: "#003473", type: "font-awesome", name: "phone" }}
                inputStyle={{ color: "#000", fontWeight: "bold", fontSize: 15 }}
                onChangeText={(value) => {}}
              />
              <Input
                value={userInfo.Celular}
                disabled={true}
                label="Tel&eacute;fono Celular"
                labelStyle={{ color: "#164b6b" }}
                leftIcon={{ color: "#003473", type: "font-awesome", name: "mobile-phone" }}
                inputStyle={{ color: "#000", fontWeight: "bold", fontSize: 15 }}
                onChangeText={(value) => {}}
              />
          <Button
            icon={
              <Icon
                name="save"
                size={20}
                color="white"
                style={{ marginLeft: 5 }}
              />
            }
            iconRight
            buttonStyle={{ backgroundColor: "#003473" }}
            title="Actualizar datos"
          />
        </View>
      </ScrollView>
  );
};

export default PersonalDataForm;