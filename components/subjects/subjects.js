import React, { useEffect, useState} from "react";
import { ScrollView, Text } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

import token from '../parts/token'
import Loading from '../parts/loading'
import urlFetch from '../parts/urls-fetch'

const Subjects = ({ navigation }) => {
  const [userSubjects, setUserSubjects] = useState([])
  const [noSubjects, setNoSubjects] = useState("")
  const [loading, setLoading] = useState(true)

  var fd = new FormData();

  useEffect(() => {
    async function userSubjectsDataFunc() {
          const userId = await AsyncStorage.getItem("@userId");
          const userPeri = await AsyncStorage.getItem("@userPeri");
          const userPeri2 = await AsyncStorage.getItem("@userPeri2");

          fetch("https://app.oymas.edu.do/asignaturas?uI="+userId+"&peri="+userPeri+"&peri2="+userPeri2+"tk="+token())
            .then((response) => response.json())
            .then((res) => {
              if (res.Response_message.Error === "True") {
                setNoSubjects(res.Response_message.Mensaje);
                setLoading(false)
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
                    setUserSubjects(res["asignaturas"]);
                    setLoading(false);
                  });
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
      {userSubjects.length !== 0 ? userSubjects.map((l, i) => (
        <ListItem
          key={l.codigo_asignatura.toString()}
          bottomDivider
          onPress={() =>
            navigation.push("SubjectsSingle", {
              subjectTitle: l.asignatura,
              subjectItem: l.item,
            })
          }
        >
          <ListItem.Content>
            <ListItem.Title>
             [{l.codigo_asignatura}] {l.asignatura}
            </ListItem.Title>
            <ListItem.Subtitle>
              {l.profesor}
            </ListItem.Subtitle>
            <ListItem.Subtitle>
              Secci&oacute;n {l.seccion}
            </ListItem.Subtitle>
            <ListItem.Subtitle>
              {l.credito > 1 ? l.credito + " créditos" : l.credito + " crédito"}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron color="gray" />
        </ListItem>
      )) : <Text> { noSubjects } </Text>}
    </ScrollView>
  );
};

export default Subjects;