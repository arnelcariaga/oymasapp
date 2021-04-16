import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import token from '../parts/token'
import Loading from '../parts/loading'
import Accordion from "./accordion";
import urlFetch from '../parts/urls-fetch'

const Annoucement = () => {
  const [annoucement, setAnnoucement] = useState([])
  const [noAnnoucement, setNoAnnoucement] = useState("")
  const [loading, setLoading] = useState(true)

  var fd = new FormData();

  useEffect(() => {
    async function userSubjectsDataFunc() {
      const userId = await AsyncStorage.getItem("@userId");

          fetch("https://app.oymas.edu.do/anuncio/?uI="+userId+"&tk="+token())
            .then((response) => response.json())
            .then((res) => {
              
              if (res.Response_message.Error === "True") {
                setNoAnnoucement(res.Response_message.Mensaje);
                setLoading(false)
              }else{
                for (var i = res["results"].Total_anuncios; i >= 1; i--) {
                  fd.append("results[]", JSON.stringify(res["results"][i]));
                }

                fetch(urlFetch() + "decrypted_annoucement_data.php", {
                  method: "POST",
                  body: fd,
                })
                  .then((response) => response.json())
                  .then((res) => {
                    setAnnoucement(res["anuncios"]);
                    setLoading(false);
                  });
              }
            });
    }
    userSubjectsDataFunc();
  }, []);

  const icon = "info";
  const iconType = "";

  if (loading) {
    return <Loading />
  }
  return (
    <ScrollView>
      {annoucement.length !== 0 ? annoucement.map((l, i) => (
        <Accordion
          key={i}
          icon={icon}
          iconType={iconType}
          title={l.Titulo}
          Profesor={l.Profesor}
          Fecha_post={l.Fecha_post}
          FechaInicio={l.FechaInicio}
          data={[l.Descripcion]}
        />
      )) : <Text> { noAnnoucement }</Text>}
    </ScrollView>
  );
};

export default Annoucement;