import React, { useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import { Avatar, Card } from "react-native-elements";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HTML from "react-native-render-html";

import Loading from '../../parts/loading'
import urlFetch from '../../parts/urls-fetch'

var fd = new FormData();

const SubjectSingle = (props) => {
  const [teacherInfo, setTeacherInfo] = useState()
  const [noTeacherInfo, setNoTeacherInfo] = useState("")
  const [loading, setLoading] = useState(true)

  const contentWidth = useWindowDimensions().width;

  useEffect(() => {
    async function userSubjectsDataFunc() {

          var subjectItem = props.subjectItem
          const userId = await AsyncStorage.getItem("@userId");
          const userType = await AsyncStorage.getItem("@userType");

          fetch("https://app.oymas.edu.do/asignatura/bienvenida/?item="+subjectItem+"&uI="+userId+"&usuario="+userType)
            .then((response) => response.json())
            .then((res) => {
                
                fd.append("nombre_profesor", JSON.stringify(res["Results"]["nombre_profesor"]));
                fd.append("foto_profesor", JSON.stringify(res["Results"]["foto_profesor"]));
                fd.append("bienvenida_profesor", JSON.stringify(res["Results"]["bienvenida_profesor"]));

                fetch(urlFetch() + "decrypted_teacher_data.php", {
                  method: "POST",
                  body: fd,
                })
                  .then((response) => response.json())
                  .then((res) => {
                    setTeacherInfo(res);
                    setLoading(false);
                  });
              
            });
    }
    userSubjectsDataFunc();
  }, []);

  if (loading) {
    return <Loading />
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Avatar
          rounded
          source={{ uri: teacherInfo.foto_profesor }}
          size="xlarge"
        ></Avatar>

        <View>
          <Text style={styles.userName}> {teacherInfo.nombre_profesor} </Text>
        </View>
      </View>

      <Card containerStyle={styles.cardSubjects}>
        <Card.Title>
          <Text style={{ fontWeight: "normal" }}>
            Bienvenid@ a la asignatura
          </Text>{" "}
        </Card.Title>
        {
          teacherInfo.bienvenida_profesor !== "" ?
          <HTML source={{ 
            html: `
                      <!DOCTYPE html>\n
                      <html>
                        <head>
                          <title>Web View</title>
                          <meta http-equiv="content-type" content="text/html; charset=utf-8">
                          <meta name="viewport" content="width=320, user-scalable=yes">
                          <style type="text/css">
                            body {
                              margin: 0;
                              padding: 0;
                            }
                          </style>
                        </head>
                        <body>
                            ${teacherInfo.bienvenida_profesor}
                        </body>
                      </html>
                      `
          }} contentWidth={contentWidth} /> :
            <Text>Sin descripci&oacute;n</Text>
          }
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
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight - 10,
  },
  userName: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  cardSubjects: {
    borderRadius: 10
  },
});

export default SubjectSingle;