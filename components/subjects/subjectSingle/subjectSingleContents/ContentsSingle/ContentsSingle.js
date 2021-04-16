import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Card, Icon } from "react-native-elements";

import HTML from "react-native-render-html";

import AsyncStorage from "@react-native-async-storage/async-storage";

import urlFetch from '../../../../parts/urls-fetch'

import Document from './Document';
import Exam from './Exam';
import AsingmentWithFile from './AsignOrPracticWithFile';
import Link from './Link';
import Image from './Image';
import HtmlPage from './HtmlPage';
import Annoucement from './Annoucement';

var fd = new FormData();

const SubjectSingleContents = (props) => {
  const [content, setContent] = useState([])
  const icon = "assignment";
  const iconType = "";

  
  var subjectContentTitle = props.route.params.subjectContentTitle,
      linkTo = props.route.params.linkTo,
      tipo = props.route.params.Tipo,
      subjectItem = props.route.params.subjectItem,
      contentId = props.route.params.contentId,
      arr = [];

  useEffect(() => {
    let unmount = true
    async function fetchData() {
      const userId = await AsyncStorage.getItem("@userId");

      fetch("https://app.oymas.edu.do/asignatura/contenido/"+linkTo+"&it="+subjectItem+"&ic="+contentId+"&ie="+userId)
            .then((response) => response.json())
            .then((res) => {
              arr.push(res["Results"]["Contenido"]);
                  fd.append("tipo", tipo);
                 fd.append("contentSingleResults", JSON.stringify(arr));
                 
                fetch(urlFetch() + "decrypted_content_single_data.php", {
                  method: "POST",
                  body: fd,
                })
                  .then((response) => response.json())
                  .then((res) => {
                    console.log(res)
                    setContent(res["Results"])
                  });

            });
    }
    fetchData();
      return () => unmount = false; // Abort both fetches on unmount
  },[])

  if (tipo === "documento") {
    return <Document content={content} subjectContentTitle={subjectContentTitle} />
  }else if (tipo === "ex&aacute;men") {
    return <Exam content={content} subjectContentTitle={subjectContentTitle} />
  }else if(tipo === "Trabajo pr&aacute;ctico o asignaci&oacute;n"){
    return <AsingmentWithFile content={content} subjectContentTitle={subjectContentTitle} />
  }else if(tipo === "enlace"){
    return <Link content={content} subjectContentTitle={subjectContentTitle} />
  }else if (tipo === "archivo de imagen") {
    return <Image content={content} subjectContentTitle={subjectContentTitle} />
  }else if (tipo === "p&aacute;na de HTML") {
    return <HtmlPage content={content} subjectContentTitle={subjectContentTitle} />
  }else if (tipo === "Anuncio ") {
    return <Annoucement content={content} subjectContentTitle={subjectContentTitle} />
  }else{
    return <Text> klk </Text>
  }
};

export default SubjectSingleContents;