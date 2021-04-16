import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity, useWindowDimensions } from "react-native";
import { Card, Icon, Text } from "react-native-elements";

import HTML from "react-native-render-html";

import urlFetch from '../../../../parts/urls-fetch'

var fd = new FormData();

const Exam = (props) => {
  const content = props.content;
  const subjectContentTitle = props.subjectContentTitle
  const tipo = props.tipo
  const contentWidth = useWindowDimensions().width;
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
          <Card.Title> {subjectContentTitle} | Ex&aacute;men</Card.Title>
        </View>

        <View>
          {
            content.length === 0 ? null : content[0].Descripcion !== "" ? <HTML 
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
                            ${content[0].Descripcion}
                        </body>
                      </html>
                      `
          }} 
          contentWidth={contentWidth}
           /> : null
          }
        </View>

        <Card.Divider />

        <Card
          containerStyle={{
            borderWidth: 0,
            borderTopWidth: 1,
            borderTopColor: "#001b3c",
            borderRadius: 5,
            backgroundColor: "#f0fdec",
            marginBottom: 30
          }}
        >
        <Card.Title><Text h4>Información del examen</Text></Card.Title>

          <Text style={{ marginBottom: 15 }}>
          <Icon
            name="calendar-alt"
            type="font-awesome-5"
            color="#164b6b"
            size={15}
          />{" "}
          Fecha disponible desde{" "}
          <Text style={{ fontWeight: "bold" }}>{content.length === 0 ? null : content[0].Fecha_disponible_examen_desde}</Text> hasta{" "}
          <Text style={{ fontWeight: "bold" }}>{content.length === 0 ? null : content[0].Fecha_disponible_examen_hasta}</Text>
        </Text>

        <Text style={{ marginBottom: 15 }}>
          <Icon
            name="clock"
            type="feather"
            color="#164b6b"
            size={15}
          />{" "}
          Hora disponible desde{" "}
          <Text style={{ fontWeight: "bold" }}>{content.length === 0 ? null : content[0].Hora_disponible_examen_desde}</Text> hasta{" "}
          <Text style={{ fontWeight: "bold" }}>{content.length === 0 ? null : content[0].Hora_disponible_examen_hasta}</Text>
        </Text>

        <Text style={{ marginBottom: 15 }}>
          <Icon
            name="timer"
            type="materialIcons"
            color="#164b6b"
            size={15}
          />{" "}
          Duraci&oacute;n{" "}
          <Text style={{ fontWeight: "bold" }}>{content.length === 0 ? null : content[0].Duracion}</Text>
        </Text>

        </Card>

        <Card.Divider />

        <Card containerStyle={{
          marginBottom: 30
        }}>
          {
            content.length === 0 ? null : content[0].Mandato_Examen !== "" ? <HTML 
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
                            ${content[0].Mandato_Examen}
                        </body>
                      </html>
                      `
          }} 
          contentWidth={contentWidth}
           /> : null
          }
        </Card>

        

        
        <Card.Divider />

        <View>
          {
            content.length === 0 ? null : content[0].Estatus !== "" ? <HTML 
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
                            ${content[0].Estatus}
                        </body>
                      </html>
                      `
          }} 
          contentWidth={contentWidth}
           /> : null
          }
        </View>

      </Card>
    </ScrollView>
  );
};

export default Exam;