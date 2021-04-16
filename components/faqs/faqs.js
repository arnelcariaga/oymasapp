import React from "react";
import { ScrollView } from "react-native";

import Accordion from "../parts/accordion";

const list = [
  {
    name: "Que dias vamos a impartir las clases ?",
    subtitle: "Matematica Basica",
    code: 1010,
    credits: "Publicado 25/04/20 | Diogenes Lopez",
    content: "klk",
  },
  {
    name: "Anuncio muy importante!!!",
    subtitle: "Metodos de la investigacion",
    code: 3457,
    credits: "Publicado 02/10/20 | Carlos Alboran",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Como evaluamos las calificaciones ?",
    subtitle: "Logistica de investigaciones en el campo",
    code: 6681,
    credits: "Publicado 09/1/21 | Pablo Martinez",
    content: "what",
  },
];

const Faqs = () => {
  const icon = "question-circle";
  const iconType = "font-awesome";

  return (
    <ScrollView>
      {list.map((l, i) => (
        <Accordion
          key={i}
          icon={icon}
          iconType={iconType}
          title={l.name}
          subtitle={l.subtitle}
          code={l.code}
          credits={l.credits}
          data={[l.content]}
        />
      ))}
    </ScrollView>
  );
};

export default Faqs;