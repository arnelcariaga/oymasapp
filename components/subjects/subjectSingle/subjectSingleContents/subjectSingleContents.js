import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Accordion from "./accordion";
import urlFetch from '../../../parts/urls-fetch'
import Loading from '../../../parts/loading'

const SubjectSingleContents = (props) => {
  const [categoriesInfo, setCategoriesInfo] = useState()
  const [loading, setLoading] = useState(true)

  var fd = new FormData();

  useEffect(() => {
    async function userSubjectsDataFunc() {

          var subjectItem = props.subjectItem;
          const userId = await AsyncStorage.getItem("@userId");
          const userType = await AsyncStorage.getItem("@userType");

          fetch("https://app.oymas.edu.do/asignatura/contenido/?item="+subjectItem)
            .then((response) => response.json())
            .then((res) => {
                
                fd.append("Results[]", JSON.stringify(res));

                fetch(urlFetch() + "decrypted_subjects_content_category_data.php", {
                  method: "POST",
                  body: fd,
                })
                  .then((response) => response.json())
                  .then((res) => {
                    setCategoriesInfo(res["Categorias"]);
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
    <ScrollView>
      {categoriesInfo.map((l, i) => (
        <Accordion
          key={i}
          title={l.Titulo}
          descripcion={l.Descripcion}
          data={l.Contenidos}
          subjectTitle={props.subjectTitle}
          linkTo={l.linkTo}
          Tipo={l.Tipo}
          {...props}
        />
      ))}
    </ScrollView>
  );
};

export default SubjectSingleContents;