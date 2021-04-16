import React from "react";
import { Text, ScrollView, View } from "react-native";
import { ListItem, Avatar, Badge } from "react-native-elements";

const list = [
  {
    name:
      "Buenos días, Aquí vamos a trabajar los tres enfoques que pernean el currículo dominicano",
    avatarTitle: "MB",
    subtitle: "Carlos Morban",
    credits: 4,
    section: 4620,
    status: true,
    type: "Pregunta",
  },
  {
    name: "Hablemos de la historia dominicana",
    avatarTitle: "LI",
    subtitle: "Vidal Rodriguez",
    credits: 3,
    section: 6486,
    status: false,
    type: "Discusion",
  },
  {
    name: "Vamos a discutir el tema: CALENTAMIENTO GLOBAL",
    avatarTitle: "LE",
    subtitle: "Pablo hernandez",
    credits: 6,
    section: 2379,
    status: true,
    type: "Pregunta",
  },
];

const SubjectSingleDisscussTopics = (props) => {
  return (
    <ScrollView>
      {list.map((l, i) => (
        <ListItem
          key={i}
          bottomDivider
          onPress={() =>
            props.navigation.navigate("SubjectSingleDisscussTopicsSingle", {
              subjectTitle: props.headerTitle,
              discussTopicTitle: l.name,
            })
          }
        >
          <View>
            <Avatar
              title={l.avatarTitle}
              titleStyle={{ color: "black" }}
              size="small"
            />

            <Badge
              status={l.status ? "success" : "error"}
              containerStyle={{
                position: "absolute",
                top: -55,
                right: -55,
                padding: 50,
              }}
              value="."
              textStyle={{ fontSize: 50 }}
            />
          </View>
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>
              <Badge
                status="success"
                badgeStyle={{ backgroundColor: "#47404f" }}
                value={"Formato: " + l.type}
                textStyle={{ fontSize: 11 }}
              />
            </ListItem.Subtitle>
            <ListItem.Subtitle
              style={{
                fontWeight: "bold",
              }}
            >
              <Text
                style={{
                  fontWeight: "normal",
                }}
              >
                Iniciado por:{" "}
              </Text>
              {l.subtitle}
            </ListItem.Subtitle>
            <ListItem.Subtitle
              style={{
                fontWeight: "bold",
              }}
            >
              <Text
                style={{
                  fontWeight: "normal",
                }}
              >
                Creado:{" "}
              </Text>{" "}
              12/1/2021{" "}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron color="gray" />
        </ListItem>
      ))}
    </ScrollView>
  );
};

export default SubjectSingleDisscussTopics;