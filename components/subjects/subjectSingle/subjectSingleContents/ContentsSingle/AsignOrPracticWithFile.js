import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions, Linking } from "react-native";
import { Card, Icon, Image } from "react-native-elements";

import HTML from "react-native-render-html";

const pdfIcon = require('../../../../../assets/pdf.png')
const docIcon = require('../../../../../assets/doc.png')
const pptxIcon = require('../../../../../assets/ppt.png')
const png = require('../../../../../assets/png.png')

const Asingment = (props) => {
  const content = props.content;
  const subjectContentTitle = props.subjectContentTitle
  const contentWidth = useWindowDimensions().width;

  const downloadFile = async () => {
    Linking.openURL(content[0].archivo_asignacion_url);
  }

  return (
    <ScrollView>
      <Card>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            padding: 4,
          }}
        >
          <Icon name="receipt" type="font-awesome-5" color="#164b6b" />
          <Card.Title> {subjectContentTitle} | Asignaci&oacute;n</Card.Title>
        </View>

        <Card.Divider />
        <View>
          {
            content.length === 0 ? null : content[0].mandato_descripcion !== "" ? <HTML 
            source={{ 
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
                            <span>${content[0].mandato_descripcion}</span>
                        </body>
                      </html>
                      `
          }} 
          contentWidth={contentWidth}
           /> : null
          }
        </View>
        <Text style={{ fontSize: 18, marginTop: 10 }}>
          Detalles de la asignación
        </Text>
        <Text style={{ marginLeft: 20, marginBottom: 15 }}>
          <Icon
            name="calendar-alt"
            type="font-awesome-5"
            color="#164b6b"
            size={15}
          />{" "}
          Fecha disponible desde{" "}
          <Text style={{ fontWeight: "bold" }}>{content.length === 0 ? null : content[0].fecha_desde}</Text> hasta{" "}
          <Text style={{ fontWeight: "bold" }}>{content.length === 0 ? null : content[0].fecha_hasta}</Text>
        </Text>

        <Text style={{ fontSize: 12 }}>
          {" "}
          <Icon
            name="share-square"
            type="font-awesome-5"
            color="#164b6b"
            size={13}
          />{" "}
          {content.length === 0 ? null : content[0].Multiple_upload}
        </Text>
        <Card.Divider />

        <Text style={{ fontSize: 18, marginBottom: 5 }}>
          Archivo(s) de la asignación
        </Text>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            marginLeft: 10,
          }}
          onPress={downloadFile}
        >
          {
          content.length === 0 ? null : content[0].archivo_asignacion_extension === "pdf" ? <Image
            source={pdfIcon}
            style={{ width: 18, height: 18 }}
          /> : content[0].archivo_asignacion_extension === "docx" || content[0].archivo_asignacion_extension === "doc" ? <Image
            source={docIcon}
            style={{ width: 18, height: 18 }}
          /> : content[0].archivo_asignacion_extension === "pptx" ? <Image
            source={pptxIcon}
            style={{ width: 18, height: 18 }}
          /> : content[0].archivo_asignacion_extension === "png" ? <Image
            source={png}
            style={{ width: 18, height: 18 }}
          /> : null
        }
          <Text
            style={{
              color: "#003473",
              fontWeight: "bold",
              fontSize: 12,
              marginLeft: 5,
            }}
          >
            {content.length === 0 ? null : content[0].archivo_asignacion}
          </Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 18, marginBottom: 5, marginTop: 15 }}>
                      Archivos subido a esta asignación.
                    </Text>

        {
          content.length === 0 ? null : 
          content[0].estudiante_subio_archivo === 1 ?
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          marginLeft: 10,
                        }}
                      >
                        {
                          content.length === 0 ? null : content[0].estudiante_nombre_archivo_subido.split('.').pop() === "pdf" ? <Image
            source={pdfIcon}
            style={{ width: 18, height: 18 }}
          /> : content[0].estudiante_nombre_archivo_subido.split('.').pop() === "docx" || content[0].estudiante_nombre_archivo_subido.split('.').pop() === "doc" ? <Image
            source={docIcon}
            style={{ width: 18, height: 18 }}
          /> : content[0].estudiante_nombre_archivo_subido.split('.').pop() === "pptx" ? <Image
            source={pptxIcon}
            style={{ width: 18, height: 18 }}
          /> : content[0].estudiante_nombre_archivo_subido.split('.').pop() === "png" ? <Image
            source={png}
            style={{ width: 18, height: 18 }}
          /> : null
                        }
                        <Text
                          style={{
                            color: "#003473",
                            fontWeight: "bold",
                            fontSize: 12,
                            marginLeft: 5,
                          }}
                        >
                          {content[0].estudiante_nombre_archivo_subido}
                          {/*<Text style={{ color: "gray" }}>
                            La Naturaleza de las Matemáticas. Nombre: Arnel Cariaga Hiciano.
                            Matricula: 15-EISN-1-080.
                          </Text>*/}
                        </Text>
                      </TouchableOpacity>

                      {/*<TouchableOpacity
                        style={{
                          marginRight: 10,
                        }}
                      >
                        <Icon name="close" type="font-awesome" color="red" size={15} />
                      </TouchableOpacity>*/}
                    </View> : <Text>Usted no ha subido ningún documento.</Text>
        }
        

      </Card>
    </ScrollView>
  );
};

export default Asingment;