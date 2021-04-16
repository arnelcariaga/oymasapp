import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Image, Button, Card } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Loading from "../parts/loading";
import urlFetch from '../parts/urls-fetch'
import token from '../parts/token'

import useExitOnBack from '../parts/exit-app'

import {AuthContext} from '../../Context/AuthContext';

function Login() {
  const [enrollment, setEnrollment] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);

  const [noValidDataError, setNoValidDataError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [fieldRequiredError, setFieldRequiredError] = useState(false);

  useExitOnBack()

  const {handleSignIn} = useContext(AuthContext);

  function handleLogin() {
    let mounted = true
    if (enrollment !== "" && password !== "") {

      setFieldRequiredError(false)
      setBtnLoading(true)

      var fd = new FormData();
      fd.append("un", enrollment);
      fd.append("dum", password);

      fetch(urlFetch() + "encrypted_login_data.php", {
        method: "POST",
        body: fd,
      })
        .then((response) => response.json())
        .then((res) => {

          var encryptedEnrollment = res["un"],
            encryptedPassword = res["dum"];

          fetch(
            "https://app.oymas.edu.do/login" +
              "?e=" +
              encryptedEnrollment +
              "&p=" +
              encryptedPassword +
              "&tk=" +
              token()
          )
            .then((response) => response.json())
            .then(async (res) => {

              if (res["Response_message"]["Error"] === "False") {
                try {
                  await AsyncStorage.setItem(
                    "@userData",
                    JSON.stringify([res.results])
                  );
                  await AsyncStorage.setItem("@userEnrollment", enrollment);
                  await AsyncStorage.setItem("@userId", res.results.User);
                  await AsyncStorage.setItem("@userPeri", res.results.periodo);
                  await AsyncStorage.setItem("@userPeri2", res.results.periodoMonografico);
                  await AsyncStorage.setItem("@userType", res.results.TipoUsuario);

                  handleSignIn()
                  
                  if (mounted) {
                    setBtnLoading(false)
                  }
                } catch (e) {
                  setBtnLoading(false)
                  // saving error
                }
              } else {
                setBtnLoading(false)
                setNoValidDataError(true);
                setServerError(false);
              }

            })
            .catch((error) => {
              setBtnLoading(false)
              setNoValidDataError(false);
              setServerError(true);
            });
        })
        .catch((error) => {
          setBtnLoading(false)
          setNoValidDataError(false);
          setServerError(true);
        });
        mounted = false
    } else {
      setFieldRequiredError(true);
      setNoValidDataError(false);
    }
  }

  useEffect(() => {
    var a = setTimeout(function () {
      setLoading(false);
    }, 1000);
    return () => clearInterval(a);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo-oymas-transp.png")}
        style={styles.logo}
      />

      {
        noValidDataError && <Card containerStyle={{
        backgroundColor: '#f8d7da',
        borderWidth: 1,
        borderColor: '#f5c6cb',
        borderRadius: 5,
        marginBottom: '5%'
      }}>
        <Text style={{
          color: '#721c24',
          fontWeight: 'bold'
        }}>Ha ocurrido un error en la validación de sus datos, por favor intente otra vez.</Text>
      </Card>
      }

      {
        fieldRequiredError && <Card containerStyle={{
        backgroundColor: '#f8d7da',
        borderWidth: 1,
        borderColor: '#f5c6cb',
        borderRadius: 5,
        marginBottom: '5%'
      }}>
        <Text style={{
          color: '#721c24',
          fontWeight: 'bold'
        }}>Todos los campos son obligatorios.</Text>
      </Card>
      }

      {
        serverError && <Card containerStyle={{
        backgroundColor: '#f8d7da',
        borderWidth: 1,
        borderColor: '#f5c6cb',
        borderRadius: 5,
        marginBottom: '5%'
      }}>
        <Text style={{
          color: '#721c24',
          fontWeight: 'bold'
        }}>Error al conectarse al servidor.</Text>
      </Card>
      }

      <Input
        placeholder="Matr&iacute;cula"
        leftIcon={
          <Icon name="user" size={24} type="font-awesome-5" color="#164b6b" />
        }
        onChangeText={(text) => setEnrollment(text)}
        value={enrollment}
      />
      <Input
        placeholder="Contrase&ntilde;a"
        leftIcon={
          <Icon name="lock" size={24} type="font-awesome-5" color="#164b6b" />
        }
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <Button
        icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
            style={styles.loginBtnIcon}
          />
        }
        title="Iniciar sesi&oacute;n"
        iconRight
        disabled={btnLoading}
        loading={btnLoading}
        buttonStyle={styles.loginBtn}
        onPress={handleLogin}
      />

      <TouchableOpacity style={styles.forgotPassBtn} onPress={() => {}}>
        <Text style={styles.forgotPassText}>
          ¿ Olvidaste tu contrase&ntilde;a ?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },
  logo: {
    flex: 0,
    width: "100%",
    height: 65,
    resizeMode: "contain",
    marginBottom: "5%",
  },
  loginBtn: {
    backgroundColor: "#164b6b",
  },
  loginBtnIcon: {
    marginLeft: "2%",
  },
  forgotPassBtn: {
    marginLeft: "2%",
    marginTop: "5%",
  },
  forgotPassText: {
    color: "#164b6b",
  },
});

export default Login;