import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";

const list = [
  {
    title: "ESTRUCTURA ALGEBRAICA",
    content: "Realizacion de practicas",
  },
  {
    title: "Objetivos",
    content:
      "En este apartado solo veremos examenes tanto examenes finales como pruebines",
  },
  {
    title: "Contenido de la asignatura",
    content:
      "En este apartado solo veremos examenes tanto examenes finales como pruebines",
  },
  {
    title: "Metodología",
    content:
      "En este apartado solo veremos examenes tanto examenes finales como pruebines",
  },
  {
    title: "Evaluación",
    content:
      "En este apartado solo veremos examenes tanto examenes finales como pruebines",
  },
  {
    title: "Bibliografía",
    content:
      "En este apartado solo veremos examenes tanto examenes finales como pruebines",
  },
];

const SubjectSingleSyllabus = () => {

  return (
    <ScrollView>
      {list.map((l, i) => (
        <Card key={i}>
          <Card.Title
            style={{
              textAlign: "left",
            }}
          >
            {l.title}
          </Card.Title>
          <Card.Divider />
          <View>
            <Text>{l.content}</Text>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

export default SubjectSingleSyllabus;