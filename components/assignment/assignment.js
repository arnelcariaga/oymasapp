import React from "react";
import { ScrollView } from "react-native";

import Accordion from "../parts/accordion";

const list = [
  {
    title: "Lanzamiento en el atletismo (27/1/2021)",
    subject: "Educacion fisica",
    teacherAndSection: "Luis Rodriguez Lopez | Sección: 5640",
    code: 55165,
    date: "Fecha de entrega: 6/9/2021 | 20 puntos",
    description:
      "Despues de entregar este proyecto, haremos una evualacion verbal a cada uno de los miembros del grupo.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
  {
    title:
      "Proyecto final del periodo, apreciasion de una presentacion artistica",
    subject: "Educacion artistica v",
    teacherAndSection: "Claritza Suarez Jimenez | Sección: 9824",
    code: 84946,
    date: "Fecha de entrega: 4/6/2021 | 15 puntos",
    description: "Tambien se les cuestionara acerca de la teoria de las artes",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Entrega de proyecto de investigacion de aduanas",
    subject: "Logistica de investigaciones en el campo",
    teacherAndSection: "Juan Carlos Manuel Perez | Sección: 3794",
    code: 94161,
    date: "Fecha de entrega: 15/10/2021 | 30 puntos",
    description: "Entregar tambien de forma ordenada los metodos utilizados",
    content: "what",
  },
];

const Assignment = () => {
  const icon = "newspaper";
  const iconType = "font-awesome-5";

  return (
    <ScrollView>
      {list.map((l, i) => (
        <Accordion
          key={i}
          icon={icon}
          iconType={iconType}
          title={l.title}
          subtitle={l.subject}
          date={l.date}
          code={l.code}
          credits={l.teacherAndSection}
          description={[l.description]}
          data={[l.content]}
        />
      ))}
    </ScrollView>
  );
};

export default Assignment;