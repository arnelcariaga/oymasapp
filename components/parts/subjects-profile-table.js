import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

import token from './token'
import Loading from './loading'
import urlFetch from './urls-fetch'

export default function SubjectsTableProfile() {
  const [userSubjects, setUserSubjects] = useState([])
  const [noSubjects, setNoSubjects] = useState("")
  const [loading, setLoading] = useState(true)

  var fd = new FormData();

  useEffect(() => {
    let mounted = true;
    async function userSubjectsDataFunc() {
          const userId = await AsyncStorage.getItem("@userId");
          const userPeri = await AsyncStorage.getItem("@userPeri");
          const userPeri2 = await AsyncStorage.getItem("@userPeri2");

          fetch("https://app.oymas.edu.do/asignaturas?uI="+userId+"&peri="+userPeri+"&peri2="+userPeri2+"tk="+token())
            .then((response) => response.json())
            .then((res) => {
              if (res.Response_message.Error === "True") {
                if (mounted) {
                  setNoSubjects(res.Response_message.Mensaje);
                  setLoading(false)
                }
              }else{
                for (var i = res["asignaturas"].total_asignaturas; i >= 1; i--) {
                  fd.append("asignaturas[]", JSON.stringify(res["asignaturas"][i]));
                }

                fetch(urlFetch() + "decrypted_subjects_data.php", {
                  method: "POST",
                  body: fd,
                })
                  .then((response) => response.json())
                  .then((res) => {
                    if (mounted) {
                      setUserSubjects(res["asignaturas"]);
                      setLoading(false);
                    }
                  });
              }
            });
    }
    userSubjectsDataFunc();

    return () => mounted = false;
  }, []);

  if (loading) {
    return <Loading />
  }
  return (
    <View>
    {userSubjects.length !== 0 ? userSubjects.map((res) => {
      return <ListItem key={res.codigo_asignatura.toString()} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>
              [{res.codigo_asignatura}] {res.asignatura}
            </ListItem.Title>
            <ListItem.Subtitle>
              {res.profesor}
            </ListItem.Subtitle>
            <ListItem.Subtitle>
              Secci&oacute;n {res.seccion}
            </ListItem.Subtitle>
            <ListItem.Subtitle>
              {res.credito > 1 ? res.credito + " créditos" : res.credito + " crédito"}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
    }) : <Text> { noSubjects } </Text>
      
    }
    </View>
  );
}